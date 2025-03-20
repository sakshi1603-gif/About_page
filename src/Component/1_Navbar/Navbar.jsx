import React from 'react'
import style from './navbar.module.css'
import facebook from './facebook.png'
import twitter from './twitter.png'
import linkedin from './linkedin.png'

function Navbar() {
  return (
    <nav className={style.navigation}>
        <header className={style.Header}>
            <div className={style.logo}>
                <h1>BIJAL SHAH</h1>
                <h3 className={style.h3}>Financial Coach</h3>
            </div>
            <div >
                <ul className={style.list}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Work With Me</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
        </header>
        <section className={style.Section}>
                <div className={style.line}></div>
                <div className={style.images}>
                    <a href='https://www.facebook.com/wix' target='blank'><img src={facebook} className={style.facebookimg}></img></a>
                    {/* <img src='./facebook.png' className={style.facebookimg}></img> */}
                    <a href='https://x.com/Wix' target='blank'><img src={twitter} className={style.twitterimg}></img></a>
                    <a href='https://www.linkedin.com/company/wix-com' target='blank'><img src={linkedin} className={style.linkedinimg}></img></a>
                </div>
        </section>
    </nav>
  )
}

export default Navbar
