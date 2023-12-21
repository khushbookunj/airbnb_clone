import React from 'react'
import style from './FooterBottom.module.css'
import {CiGlobe} from 'react-icons/ci'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import { FaInstagramSquare } from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div className={style.footerBotomBox}>
      <div>
        <p>© 2023 Airbnb, Inc.</p>
        <p>Privacy</p>
        <p>Terms</p>
        <p>Sitemap</p>
        <p>Company details</p>
      </div>
      <div>
        <p className={style.icon} id={style.globe}><CiGlobe /></p>
        <p>English (IN)</p>
        <p> ₹ INR</p>
        <p className={style.icon}><FaFacebookSquare /></p>
        <p className={style.icon}><FaTwitterSquare /></p>
        <p className={style.icon}><FaInstagramSquare /></p>
      </div>
      
    </div>
  )
}

export default FooterBottom
