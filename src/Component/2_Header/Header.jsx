import React from 'react';
import style from './header.module.css';

function Header() {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.title}>
          <h1 className={style.header}>
            <span className={style.aboutme}>
              About Me
            </span>
          </h1>
        </div>
        <div className={style.paradiv}>
          <p className={style.para}>
            <div className={style.content}>
              I'm a paragraph. Click here to add your own text and edit me. It's easy.
              Just click "Edit Text" or double click me to add your own content and
              make changes to the font.
            </div>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Header;