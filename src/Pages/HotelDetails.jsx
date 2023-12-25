import React, { useState,useEffect } from 'react'
import HotelDetailPage from '../components/HotelDetailsPage/HotelDetailPage';
import Layout from '../Layout';
import cardJson from '../wharehouse/Lake.json';
import { useParams } from 'react-router';
import HotelDescription from '../components/HotelDetailsPage/HotelDescription';


const HotelDetails = () => {
const {name}=useParams();  
  return (
   <>
   <Layout>
   <HotelDetailPage data={cardJson?.data} name={name}/>
   <HotelDescription />
   </Layout>
 
   </>
  )
}

export default HotelDetails;