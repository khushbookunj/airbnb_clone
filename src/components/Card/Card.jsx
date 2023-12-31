import React from 'react'
import SliderImg from './SliderImg';
import style from './Card.module.css'
import { FaStar } from "react-icons/fa";
import {useNavigate} from 'react-router';

const Card = ({ id, image, name, title, date, rating, price }) => {
    console.log(id);
    console.log(image);
    const navigate=useNavigate();

    // const slides = [
    //     { url: "https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720", title: "beach" },
    //     { url: "https://a0.muscache.com/im/pictures/b089a5c4-e536-40d1-a501-2fb2fd6a73c9.jpg?im_w=720", title: "boat" },
    //     { url: "https://a0.muscache.com/im/pictures/c6d215a4-810e-46fd-acf5-2f48ba2bf8eb.jpg?im_w=720", title: "forest" },
    //     { url: "https://a0.muscache.com/im/pictures/bb38ea86-2f63-4739-b200-f14db56dc68c.jpg?im_w=720", title: "italy" },
    //     { url: "https://a0.muscache.com/im/pictures/d4d1f0c3-9177-4681-bb9a-01883ed7269d.jpg?im_w=720", title: "italy" }
    // ];
const handleCardClick=()=>{
    console.log("cart click" ,id);
    navigate(`/hotel-detailPage/${id}`)
}

    return (
        <>

            <div >

                <div className={style.singleCardBox} onClick={handleCardClick}>
                    <div className={style.containerStyles}>
                        <SliderImg slides={
                            image.map((item) => {
                                return { url: item }
                            })
                        } />
                    </div>
                    <div className={style.nameAadRatingDiv}>
                        <h4>{name}</h4>
                        <p style={{ color: "black" }}><FaStar /><span>{rating}</span></p>
                    </div>
                    <p>{title}</p>
                    <p>{date}</p>
                    <p id={style.price}>&#8377;{price}<span id={style.night}>night</span></p>
                </div>
            </div>
        </>

    )
}

export default Card
