
import React from 'react'
import style from './Footer.module.css'
import FirstFooter from './FirstFooter/FirstFooter'
import FooterBottom from './FooterBottom/FooterBottom'

const Footer = () => {
  return (
    <div className={style.footerContainer}>
        {/* <FirstFooter/> */}
        <hr />
        <div className={style.lastPartFooterBox}>

            <div> 
                <ul>
                    <h4>Support</h4>
                    <li>Help Centre</li>
                    <li>AirCover </li>
                    <li>Anti-discrimination</li>
                    <li>Disability support</li>
                    <li>Cancellation options</li>
                    <li>Report neighbourhood concern</li>
                </ul>
            </div>
            <div>
                <ul>
                    <h4>Hosting</h4>
                    <li>Airbnb your home</li>
                    <li>AirCover for Hosts</li>
                    <li>Hosting resources</li>
                    <li>Community forum</li>
                    <li>Hosting responsibly</li>
                    
                </ul>
            </div>
            <div>
                <ul>
                    <h4>Airbnb</h4>
                    <li>Newsroom</li>
                    <li>New features</li>
                    <li>Careers</li>
                    <li>Investors</li>
                    <li>Airbnb.org emergency stays</li>
                    
                </ul>
            </div>
        </div>
    <FooterBottom/>
    </div>
  )
}

export default Footer
