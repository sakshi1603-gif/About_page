import React from 'react'
import style from './info.module.css'

function Footer() {
  return (
    <section>
      <div className={style.container}>
        <div className={style.footersec}>
          <h2 className={style.headersec}><span>Who I Help</span></h2>
          <p className={style.para_sec}>
            I'm a paragraph. Click here to add your own text and edit me. 
            It's easy. Just click "Edit Text" or double click me to add 
            your own content and make changes to the font.
          </p>
        </div>
        <div className={style.footersec}>
          <h2 className={style.headersec}><span>How I Do It</span></h2>
          <p className={style.para_sec}>
            I'm a paragraph. Click here to add your own text and edit me. 
            It's easy. Just click "Edit Text" or double click me to add your 
            own content and make changes to the font.
          </p>
        </div>
        <div className={style.footersec}>
          <h2 className={style.headersec}><span>What's in It for You</span></h2>
          <p className={style.para_sec}>
            I'm a paragraph. Click here to add your own text and edit me. 
            It's easy. Just click "Edit Text" or double click me to add 
            your own content and make changes to the font.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer