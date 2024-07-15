import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Shopcategory from "./Pages/Shopcategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from './Components/Images/banner_mens.png';
import women_banner from './Components/Images/banner_women.png';
import kid_banner from './Components/Images/banner_kids.png';


function App() {
  return (
    
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Shop/>}/>
            <Route path="men" element={<Shopcategory banner={men_banner} category="men"/>}/>
            <Route path="women" element={<Shopcategory banner={women_banner} category="women"/>}/>
            <Route path="kid" element={<Shopcategory banner={kid_banner} category="kid"/>}/>
            <Route path="Product" element={<Product/>}>
            <Route path=':ProductId' element={<Product/>}/>
            </Route>
            <Route path="cart" element={<Cart/>}/>
            <Route path="login" element={<LoginSignup/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
        
      </div>
  );
}

export default App;
