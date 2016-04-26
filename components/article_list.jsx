import React from 'react'
import Article from './article'
import moment from 'moment'
import {includes, keys} from 'lodash'

export default ({articles}) => {
  const notesByDay = articles.reduce((acc, article) => {
    const dateLiked = moment(article['date_liked'], "MMMM DD, YYYY at hh:mmA").format('YYYY-MM-DD')

    if(includes(keys(acc), dateLiked)) {
      acc[dateLiked].push(<Article article={article} />)
    } else {
      acc[dateLiked] = [<Article article={article} />]
    }

    return acc
  }, {})

  const notes = keys(notesByDay).reduce((acc, day) => {
    const dateLiked = moment(day, "YYYY-MM-DD")

    acc.push(
      <section>
        <h3>
          <time dateTime={ dateLiked.format('YYYY-MM-DD') } className="date-read">
            { dateLiked.format('dddd') }
          </time>
        </h3>        
        <ol className="reading-notes-list">
          { notesByDay[day] }
        </ol>
      </section>
    )

    return acc
  }, [])

  return (
    <div className="notes-by-day">
      {notes}
    </div>
  )
}