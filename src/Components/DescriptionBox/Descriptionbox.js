import './Descriptionbox.css';

const Descriptionbox=()=>{
return(
    <div className='descriptionbox'>
       <div className='descriptionbox-navigator'>
          <div className='descriptionbox-navbox'>Descripton</div>
          <div className='descriptionbox-navbox-fade'>Reviews (149)</div>
       </div>
       <div className='descriptionbox-description'>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quasi commodi id laudantium porro qui nostrum quisquam quam, dolorem error non esse quod obcaecati facilis aperiam enim? Illum, laboriosam ab.Lorem ipsum, dolor sit amet consectetur<br/> adipisicing elit. Eius quasi commodi id laudantium porro qui nostrum quisquam quam, dolorem error non esse quod obcaecati facilis aperiam enim? Illum, laboriosam ab.</p>
           <p>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quasi commodi id laudantium porro qui nostrum quisquam quam, dolorem error non esse quod obcaecati facilis aperiam enim? Illum, laboriosam ab.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quasi commodi id laudantium porro qui nostrum quisquam quam,<br/> dolorem error non esse quod obcaecati facilis aperiam enim? Illum, laboriosam ab.
           </p>
       </div>
    </div>
    );
}

export default Descriptionbox;