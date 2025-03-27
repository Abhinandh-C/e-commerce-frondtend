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


function App() {

  return (
    <>
     <BrowserRouter>
     <Header />
     <Routes>
      
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/cat/:id" exact={true} element={<Listing />} />
      <Route path="/product/:id" exact={true} element={<ProductDetails />} />
      <Route path="/cart" exact={true} element={<Cart />} />
      <Route path="/Profile" exact={true} element={<Profile/>} />

      </Routes >

     </BrowserRouter>
     <Footer/>
    
    </>
  )
}

export default App
