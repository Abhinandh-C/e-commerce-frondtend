import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Homes';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './component/Header';
import Footer from './pages/Homes/Footer';
import Listing from './component/Listing/Listing';


function App() {

  return (
    <>
     <BrowserRouter>
     <Header />
     <Routes>
      
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/cat/:id" exact={true} element={<Listing />} />

      </Routes >

     </BrowserRouter>
     <Footer/>
    
    </>
  )
}

export default App
