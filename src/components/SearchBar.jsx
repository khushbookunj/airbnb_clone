import React from 'react'
import './SearchBar.css';
export const SearchBar = () => {
  return (
    <div className='searchbar-page'>
        <form>
            <input type="text" placeholder='Search Place Here...' />
        </form>
    </div>
  )
}
