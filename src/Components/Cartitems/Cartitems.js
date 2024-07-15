import { useContext } from 'react';
import './Cartitems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Images/cart_cross_icon.png';

const Cartitems=()=>{

const {getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext);
 
return(
    <div className="cartitems">
       <div className='cartitem-format-main'>
         <p>Products</p>
         <p>Titles</p>
         <p>Price</p>
         <p>Quantity</p>
         <p>Total</p>
         <p>Remove</p>
       </div>
       <hr/>
       {all_product.map((e)=>{
         if(cartItems[e.id]>0)
         {
          return <div>
         <div className='cartitem-format cartitem-format-main'>
            <img src={e.image} className='cartproduct-icon'/>
            <p>{e.name}</p>
            <p>₹{e.new_price}</p>
            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
            <p>₹ {e.new_price*cartItems[e.id]}</p>
            <img className='cartitem-removeicon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}}/>
         </div>
         <hr/>
       </div>
        }
        return null;
        })}
        <div className='cartitems-down'>
           <div className='cartitems-total'>
            <h1>Cart Total</h1>
            <div>
              <div className='cartitem-totalitem'>
                <p>Subtotal</p>
                <p>₹ {getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className='cartitem-totalitem'>
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr/>
              <div className='cartitem-totalitem'>
                 <h3>Total</h3>
                 <h3>₹ {getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>Proceed to Pay</button>
           </div>
           <div className='cartitem-promocode'>
              <p>If you have promo code enter here</p>
              <div className='cartitem-promobox'>
                 <input type='text' placeholder='promo code'  />
                 <button>Submit</button>
              </div>
           </div>
        </div>
    </div>
    );
}
export default Cartitems;