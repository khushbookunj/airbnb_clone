import React from 'react'
import styles from './HotelDetailPage.module.css';
const HotelDtailImage = ({image}) => {
  console.log("Sharique",image[0]);
 
 
  // console.log("MainImg",MainImg[0]);
    // console.log(props)
    console.log(image)
  return (
    <>
    
            <div className={styles.image__container}>
   
            <div className={styles.lower__image}>
             <img src={image[0]} />
                {/* <img src='https://a0.muscache.com/im/pictures/miso/Hosting-837315422629442025/original/dd6e35a7-eeaa-4144-8c66-b05936ba1c77.jpeg' /> */}
            </div>
            <div className={styles.lower__image1}>
            {
           image.slice(1).map((item)=>(
                <img src={item}/>
        ))
      }
     </div>
    </div>
   
    </>
   
  )
}

export default HotelDtailImage;