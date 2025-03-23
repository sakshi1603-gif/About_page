import React from 'react';
import style from './section.module.css';
import image from './image.jpg';

function Section() {
  return (
    <section className={style.container}>
      <div className={style.imagediv}>
        <img className={style.image} src={image} alt="Background" />
      </div>
      
      <div className={style.intro}>
        <div className={style.header}>
          <h1><span>My Background</span></h1>
        </div>
        
        <div className={style.sec}>
          <h2 className={style.sec_head}><span>My Background Education</span></h2>
          <p className={style.sec_para}>
            I'm a paragraph. Click here to add your own text and edit me.
            It's easy. Just click "Edit Text" or double click me to add your own
            content and make changes to the font. I'm a great place for you to tell
            a story and let your users know a little more about you.
          </p>
        </div>
        
        <div className={style.sec}>
          <h2 className={style.sec_head}><span>Certificates</span></h2>
          <p className={style.sec_para}>
            I'm a paragraph. Click here to add your own text and edit me.
            It's easy. Just click "Edit Text" or double click
            me to add your own content and make changes to the font.
            I'm a great place for you to tell a story and let your users know a little more about you.
          </p>
        </div>
        
        <div className={style.sec}>
          <h2 className={style.sec_head}><span>Specialization</span></h2>
          <p className={style.sec_para}>
            I'm a paragraph. Click here to add your own text and edit me.
            It's easy. Just click "Edit Text" or double click me to
            add your own content and make changes to the font. I'm a
            great place for you to tell a story and let your users know a
            little more about you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section;