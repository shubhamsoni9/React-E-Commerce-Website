import  './Navbar.css'
import logo from '../Images/logo.png';
import cart_icon from '../Images/cart_icon.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar=()=>{

    const [menu,setMenu]=useState("shop");

return(
    
      <div className='navbar'>
          <div className='nav-logo'>
             <img src={logo}/>
             <p>SHOPPER</p>
          </div>
          <ul className='nav-menu'>
             <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none",color:"black"}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
             <li onClick={()=>{setMenu("men")}}><Link  style={{textDecoration:"none",color:"black"}}to='men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
             <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:"none",color:"black"}} to='women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
             <li onClick={()=>{setMenu("kid")}}><Link style={{textDecoration:"none",color:"black"}} to='kid'>Kids</Link>{menu==="kid"?<hr/>:<></>}</li>
          </ul>
          <div className='nav-login-cart'>
               <Link to='login'><button>Login</button></Link>
               <Link to='cart'> <img src={cart_icon}/></Link>
              <div className='nav-cart-count'>0</div>
          </div>
      </div>
    
    );
}
export default Navbar;