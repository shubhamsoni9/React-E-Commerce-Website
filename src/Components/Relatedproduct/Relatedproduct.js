import './Relatedproduct.css';
import data_product from '../Images/data';
import Item from '../Item/Item';

const Relatedproduct=()=>{
return(
    <div className="reletedproduct">
       <h1>Releted Products</h1>
       <hr/>
       <div className='relpro-item'>
          {data_product.map((item,i)=>{
                  
             return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

           })}
       </div>
    </div>
    );
}
export default Relatedproduct;