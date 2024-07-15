import './Bredcrum.css';
import arrow_icon from "../Images/breadcrum_arrow.png";


const Bredcrum=(props)=>{

    const {product}=props;


return(
    <div className='bredcrum'>
       HOME<img src={arrow_icon}/> SHOP<img src={arrow_icon}/> {product.category} <img src={arrow_icon}/> {product.name}
    </div>
    );
}
export default Bredcrum;