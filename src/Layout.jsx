import React from 'react'
import { Header } from './components/Header/Header'
import { Carousel } from './components/Carousel'
import Footer from './components/Footer/Footer'

const Layout = ({children}) => {
  return (
    <div>
      <Header/>
      <Carousel/>
      {children}
      <Footer/>

    </div>
  )
}

export default Layout
