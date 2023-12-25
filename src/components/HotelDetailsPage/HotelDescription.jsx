import React from 'react'
import styles from './HotelDescription.module.css';

const HotelDescription = () => {
  return (
    <div className={styles.desc}>
<div className={styles.desc__img}>
  
    <img className={styles.image} src="https://a0.muscache.com/im/pictures/user/9c999b5e-a377-46fc-b0b4-d7aecd62bd29.jpg" alt="" />
  
  <div>
    <h4>Hosted by Gursimran</h4>
  <p>2 years hosting</p>
  </div>
</div>
<div className={styles.desc__image}>

    <img style={{width:'2rem'}} src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" alt="" />
  
  <div>
    <h4>Dive right in</h4>
  <p>This is one of the few places in the area with a pool.</p>
  </div>
</div>
<div className={styles.desc__image}>
<i className="fa-regular fa-star" style={{fontSize:'1.5rem'}}></i>
  <div>
    <h4>Experienced host</h4>
  <p>Gursimran has 54 reviews for other places.</p>
  </div>
</div>
<div className={styles.desc__image}>
<i className="fa-regular fa-message" style={{fontSize:'1.5rem'}}></i>
  <div>
    <h4>Great communication</h4>
  <p>95% of recent guests rated Gursimran 5-star in communication.</p>
  </div>
</div>
<div className={styles.info}>Step into the splendid and picturesque abode, the magnificent rustic farmhouse of Colour Bloom, nestled in the heart of the verdant and evergreen landscape of Karnal. This haven of tranquillity provides the pinnacle of opulence, bursting with hues and eternal comfort and convenience. As you approach this sanctuary, an ambiance of grandeur and serenity engulfs you, setting the tone for your unforgettable stay.</div>
   <button className={styles.btn_showmore}>Show more {">"}</button>
   <h2>What this place offers</h2>
<div className={styles.place}>
<div>
  <div className={styles.offer}>
  <i class="fa-brands fa-pagelines"></i>
  <div>Garden view</div>
     
     </div>
  <div className={styles.offer}>
  <i class="fa-solid fa-wifi"></i>
    <div>Wifi</div>
    </div>
  <div className={styles.offer}>
  
  <i class="fa-solid fa-car"></i>
   <div>Free parking on premises</div> 
    </div>
  <div className={styles.offer}>
  <i class="fa-regular fa-snowflake"></i>
   <div> Air conditioning</div>
    </div>
  <div className={styles.offer}>
  <i class="fa-brands fa-nfc-symbol"></i>
 <div> Carbon monoxide alarm</div>
 </div>
</div>

<div>
  <div className={styles.offer}>
  <i class="fa-solid fa-utensils"></i>
  <div>Kitchen</div>
    </div>
  <div className={styles.offer}>
  <i class="fa-solid fa-network-wired"></i>
 <div> Dedicated workspace</div>
 </div>
  <div className={styles.offer}>
  <i class="fa-solid fa-sun-plant-wilt"></i>
    <div>Private outdoor pool-available all year,<br/> open specific hours</div>
    </div>
  <div className={styles.offer}>
  <i class="fa-solid fa-video"></i>
    <div>Security cameras on property</div>
    </div>
  <div className={styles.offer}>
  <i class="fa-brands fa-creative-commons-pd"></i>
   <div>Smoke alarm</div>
    </div>
</div>
</div>

    </div>
  )
}

export default HotelDescription;