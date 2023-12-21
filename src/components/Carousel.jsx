
import React, { Component } from "react";
import Slider from "react-slick";
import './Carousel.css';
import {CarouselData} from './CarouselImage'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

export const Carousel=() =>{
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (

    <div style={{marginLeft:'5%',marginRight:'35%',marginTop:'2%',marginBottom:'2%'}}>
    
    <Slider {...settings}>
      {CarouselData.map((item)=>(
        <div className="carousel-details">
          <img src={item.image} />
          <h5>{item.title}</h5>
        </div>
      ))}
     
    </Slider>
    <span style={{position:'absolute',right:'310px',top:'120px',border:'1px solid var(--gray)',padding:'0.5rem 1.5rem',borderRadius:'0.4rem'}}>
  <i class="fa-solid fa-sliders" style={{marginRight:'0.3rem'}}></i>
  Filter
    </span>
    <span style={{position:'absolute',width:'230px',right:'35px',top:'120px',border:'1px solid var(--gray)',padding:'0.5rem 1.5rem 0.5rem 0.3rem',borderRadius:'0.4rem'}}>
      Display total before taxes
      <span style={{height:'1rem',paddingRight:'20px',background:'var(--gray)',marginLeft:'0.1rem',borderRadius:'1rem'}}><span style={{backgroundColor:'white',padding:'0rem 0.5rem',borderRadius:'50%',marginLeft:'0.2rem'}}></span></span>
    </span>
  </div>  
  
   
   
         
  )
}
