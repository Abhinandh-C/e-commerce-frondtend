import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Homes';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './component/Header';
import Footer from './pages/Homes/Footer';
import Listing from './component/Listing/Listing';
import ProductDetails from './pages/Homes/ProductDetails';
import Cart from './pages/Cart/Cart';
import Profile from './pages/profile/Profile';
import { useState ,createContext } from 'react';

 export const MyContext = createContext();
function App() {
  
const [isHeaderFooterShow,setIsHeaderFooterShow] =useState(true);
const [isFooterShow,setIsFooterShow] =useState(true);


const values={
  isHeaderFooterShow,
  setIsHeaderFooterShow,
  isFooterShow,
  setIsFooterShow
}


  return (
    <>
     <BrowserRouter>
     <MyContext.Provider value={values}>

     {
      isHeaderFooterShow === true &&  <Header />
     }
    
     <Routes>
      
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/cat/:id" exact={true} element={<Listing />} />
      <Route path="/product/:id" exact={true} element={<ProductDetails />} />
      <Route path="/cart" exact={true} element={<Cart />} />
      <Route path="/Profile/signIn" exact={true} element={<Profile/>} />

      </Routes >

      {isFooterShow === true  && <Footer />} 
      
     </MyContext.Provider>
     </BrowserRouter>
    
    </>
  )
}

export default App
