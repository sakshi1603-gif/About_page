import React from 'react'
import style from './footer.module.css'
import facebook from './facebook.png'
import twitter from './twitter.png'
import linkedin from './linkedin.png'


function Footer() {
  return (
    <footer className={style.footerbox}>
        <div className={style.container}>
            <div className={style.footersec}>
                <h2 className={style.headersec}><span>Who I Help</span></h2>
                <p className={style.para_sec}>
                I'm a paragraph. Click here to add your own text and edit me.
                 It’s easy. Just click “Edit Text” or double click me to add 
                 your own content and make changes to the font.
                </p>
            </div>
            <div className={style.footersec}>
                <h2 className={style.headersec}><span>How I Do It</span></h2>
                <p className={style.para_sec}>
                I'm a paragraph. Click here to add your own text and edit me. 
                It’s easy. Just click “Edit Text” or double click me to add your
                 own content and make changes to the font.
                </p>
            </div>
            <div className={style.footersec}>
                <h2 className={style.headersec}><span>What's in It for You</span></h2>
                <p className={style.para_sec}>
                I'm a paragraph. Click here to add your own text and edit me.
                 It’s easy. Just click “Edit Text” or double click me to add 
                 your own content and make changes to the font.
                </p>
            </div>
        </div>
        <div className={style.Section}>
                        
                        <div className={style.images}>
                            <a href='https://www.facebook.com/wix' target='blank'><img src={facebook} className={style.facebookimg}></img></a>
                            {/* <img src='./facebook.png' className={style.facebookimg}></img> */}
                            <a href='https://x.com/Wix' target='blank'><img src={twitter} className={style.twitterimg}></img></a>
                            <a href='https://www.linkedin.com/company/wix-com' target='blank'><img src={linkedin} className={style.linkedinimg}></img></a>
                        </div>
        </div>
        <div className={style.last}>
            <span>©2023 by Layla Barnies. Proudly created with <span><a href='https://www.wix.com' target='blank'>Wix.com</a></span></span>
        </div>
    </footer>
    
  )
}

export default Footer