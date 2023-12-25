
import { Carousel } from './components/Carousel';
import './App.css';
import {Header} from './components/Header/Header'
import Layout from './Layout';
import HomePage from './Pages/HomePage/HomePage';
import {Routes,Route} from 'react-router-dom';
import HotelDetails from './Pages/HotelDetails';



function App() {
 
  return (
   
     <>
     <Routes >
      <Route path="/" element={ <HomePage/>}/>
      <Route path='/hotel-detailPage/:name' element={<HotelDetails />} />
     </Routes>
     
     
    
    
     </>   
    
  )
}

export default App;
