import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Bredcrum from "../Components/Breadcrum/Bredcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Descriptionbox from "../Components/DescriptionBox/Descriptionbox";
import Relatedproduct from "../Components/Relatedproduct/Relatedproduct";

const Product=()=>{

    const {all_product}=useContext(ShopContext);
    const {ProductId}=useParams();
    const product=all_product.find((e)=> e.id === Number(ProductId));

    return(
        
    <div>
       <Bredcrum product={product}/>
       <ProductDisplay product={product}/>
       <Descriptionbox/>
       <Relatedproduct/>
    </div>
    
    );
    }
    export default Product;