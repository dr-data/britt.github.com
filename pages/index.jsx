import React from 'react'
import Headline from 'components/headline'
import Icon from 'components/icon'
import 'css/gutenberg/src/style/gutenberg.scss'

export default ({route}) => {
  return (
    <main className="container">
      <section className="introduction">
        I live in San Francisco with my family. I've been a researcher, 
        programmer, and low limit poker grinder. Currently I run analytics 
        at <a href="https://rafter.com" title="Rafter, the place where I work" className="work">Rafter</a>, 
        and I need a better bio. You can find me on the internet at:
      </section>
      <section className="list-of-links">
        <ul>
          <li>
            <a href="https://twitter.com/britt" title="My Twitter Feed" rel="me"><i className="fa fa-twitter fa-fw"></i><span>@britt</span></a>
          </li>
          <li>
            <a href="https://www.facebook.com/britt.crawford" title="My Facebook Profile" rel="me"><i className="fa fa-facebook fa-fw"></i><span>https://www.facebook.com/britt.crawford</span></a>
          </li>
          <li>
            <a href="https://github.com/britt" title="GitHub" rel="me"><i className="fa fa-github-alt fa-fw"></i><span>https://github.com/britt</span></a>
          </li> 
          <li>
            <a href="http://www.linkedin.com/in/brittcrawford/" title="My LinkedIn Profile" rel="me"><i className="fa fa-linkedin fa-fw"></i><span>https://www.linkedin.com/in/brittcrawford/</span></a>
          </li> 
          <li>
            <a href="http://illtemper.org" title="A stream of consciousness link blog"><i className="fa fa-link fa-fw"></i><span>http://illtemper.org</span></a>
          </li> 
          <li>
            <a href="bitcoin:17nHbStzmWgcBEBSgVFT94Eo5hoq9h7Hh1" title="Bitcoin"><i className="fa fa-bitcoin fa-fw"></i><span>Bitcoin</span></a>
          </li> 
          <li>
            <a href="/britt.gpg" title="PGP/GPG Public Key"><i className="fa fa-lock fa-fw"></i><span>PGP/GPG Key</span></a> &mdash;&nbsp;
            <a href="https://keybase.io/britt" title="Keybase"><span>Keybase</span></a> &mdash;&nbsp; 
            <a href="http://pgp.mit.edu/pks/lookup?op=vindex&search=0x7C887E4EE58C84B3" title="MIT PGP Public Key Server"><span>MIT</span></a>
          </li>                                                       
        </ul>
      </section>
      <section className="list-of-links">
        <h3>Projects</h3>
        <ul>
          <li>
            <a href="/reading/">
              Reading Notes
            </a>
            <summary>
              A weekly summary of articles that I have read and liked.
            </summary>
          </li>
          <li>
            <a href="/cocktails/">
              Cocktail Recipes
            </a>
            <summary>
              A small collection of cocktails that I've created.
            </summary>
          </li>
          <li>
            <a href="https://github.com/britt/britt.github.com">
              This site
            </a>
            <summary>
              The source code for <a href="/">brittcrawford.com</a>. Look in 
              the <a href="https://github.com/britt/britt.github.com">master branch</a> for 
              the deployed code, or in 
              the <a href="https://github.com/britt/britt.github.com/tree/gatsby">gatsby branch</a> to 
              see the JavaScript and React that actually builds the static site. 
              This site was built 
              with <a href="https://github.com/gatsbyjs/gatsby">Gatsby</a> and <a href="https://matejlatin.github.io/Gutenberg/">Gutenberg</a>.
            </summary>
          </li>
        </ul>
      </section>
    </main>
  )
}
