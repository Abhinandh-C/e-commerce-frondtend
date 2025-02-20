import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Homes';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './component/Header';

function App() {

  return (
    <>
     <BrowserRouter>
     <Header />
     <Routes>
      <Route path="/" exact={true} element={<Home />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
