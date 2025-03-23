import React from 'react' 
import style from './footer.module.css' 
import facebook from './facebook.png' 
import twitter from './twitter.png' 
import linkedin from './linkedin.png'   

function Footer() {   
  return (     
    <footer className={style.footerbox}>                  
      <div className={style.Section}>                                                  
        <div className={style.images}>                             
          <a href='https://www.facebook.com/wix' target='blank'>
            <img src={facebook} className={style.facebookimg} alt="Facebook"></img>
          </a>                             
          {/* <img src='./facebook.png' className={style.facebookimg}></img> */}                             
          <a href='https://x.com/Wix' target='blank'>
            <img src={twitter} className={style.twitterimg} alt="Twitter"></img>
          </a>                             
          <a href='https://www.linkedin.com/company/wix-com' target='blank'>
            <img src={linkedin} className={style.linkedinimg} alt="LinkedIn"></img>
          </a>                         
        </div>         
      </div>         
      <div className={style.last}>             
        <span>©2023 by Layla Barnies. Proudly created with <span><a href='https://www.wix.com' target='blank'>Wix.com</a></span></span>         
      </div>     
    </footer>        
  )
}  

export default Footer