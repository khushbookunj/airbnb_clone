import React,{useState,useEffect} from 'react'
import styles from './HotelDetailPage.module.css';
import HotelDtailImage from './HotelDtailImage';

const HotelDetailPage = ({data,name}) => {
    // console.log(data)
    // console.log(name)
    const [hotel,setHotel]=useState([]);
    // const {name}=useParams();
    console.log(name)
   

    useEffect(()=>{
        const cardJsonData=data.filter((item)=>item.name===name)
        setHotel(cardJsonData)
    },[name]);
    
   console.log(hotel)

  return (
    
    <>  
    {
        hotel.map((item)=>(
            <>
     <div className={styles.main__container}>
    <h2>{item.name}</h2>
    <div className={styles.icon__container}>
        <div><i className="fa-solid fa-arrow-up-from-bracket"></i> share</div>
        <div><i className="fa-regular fa-heart"></i> save</div>
    </div>
</div>

{/* <div className={styles.image__container}>
   
<div className={styles.lower__image}>
    <img src='https://a0.muscache.com/im/pictures/miso/Hosting-837315422629442025/original/dd6e35a7-eeaa-4144-8c66-b05936ba1c77.jpeg' />
</div>
<div className={styles.lower__image1}>
    <img src='https://a0.muscache.com/im/pictures/miso/Hosting-837315422629442025/original/0cd7d86b-af64-4761-bf21-ad2b910d2818.jpeg' />
    <img src='https://a0.muscache.com/im/pictures/miso/Hosting-837315422629442025/original/0cd7d86b-af64-4761-bf21-ad2b910d2818.jpeg' />
    <img src='https://a0.muscache.com/im/pictures/miso/Hosting-837315422629442025/original/0cd7d86b-af64-4761-bf21-ad2b910d2818.jpeg' />
    <img src='https://a0.muscache.com/im/pictures/miso/Hosting-837315422629442025/original/0cd7d86b-af64-4761-bf21-ad2b910d2818.jpeg' />
</div>


</div> */}
<HotelDtailImage image={item.image}/>
<div className={styles.description}>
  
<h3>{item.title}</h3>

      
    
    <div>8 guest . 2 bedrooms . 2 beds . 2 bathrooms</div>
    <div className={styles.review}><i className="fa-solid fa-star"></i> 1 review</div>
</div>

</>

 ))
}
</>
 
 
  )
}

export default HotelDetailPage