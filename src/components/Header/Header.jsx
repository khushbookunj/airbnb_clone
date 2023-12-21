import React from 'react';
import logo from '../../assets/logo/logo.jpg';
import './Header.css';
import { UserDetails } from '../UserDetails';
import { useState } from 'react';
import { SearchBar } from '../SearchBar';

export const Header=()=>{
    const [user,setUser]=useState(false);
    const [searchbox,setSearchbox]=useState(false);

    return (
        <>
       <nav className='navbar'>
        <img src={logo} alt='logo_image'/>
        <div className="search_bar">
            <div className="any_where">Anywhere</div>
            <div className="any_week">Any week</div>
            <div className='add_guest'>Add guests</div>
       <div onClick={()=>setSearchbox((prev)=>(!prev))}><i className="fa-solid fa-magnifying-glass glass"></i></div>
        </div>
        <div className='about_section'>
            <div className="airbnb_home">Airbnb your home</div>
            <div><i className="fa-solid fa-globe globe"></i></div>
            <div className='profile' onClick={()=>setUser((prev)=>(!prev))}>
                <div><i className="fa-solid fa-bars bar"></i></div>
                <div><i className="fa-regular fa-user user"></i></div>
            </div>
        </div>
       
       </nav>

       {searchbox && <SearchBar />}
       {user &&  <UserDetails />}
      
       </>
    )
   
}

