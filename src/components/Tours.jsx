import React, {useState} from 'react';
import '../App.css';

const Tours = ( {tourData, deleteData} ) => 
{
    const[readMore, setReadMore] = useState(false);
    return(
        <div className='container'>
            <h1>Our Tours</h1>
            <div className='border-design'></div>
        {
             tourData.map((tour)=>{
                const {info, id} = tour;
                return(
                     <div key ={id} className='main-container'>
                        <div className='sub-container'>
                            <img src={tour.image} className="res-img" />
                        </div>
                        <div className="content-container">
                            <h6 className="tours-text">{ tour.name }  </h6>
                            <span>$ { tour.price } </span>
                        </div>

                        <div>
                            <p>
                               {readMore? info: `${info.substring(0,150)}...`}
                            <button onClick={()=>setReadMore(!readMore)}>
                                {readMore ? 'show Less' : 'read more'}
                            </button>
                            </p>
                        </div>
                        <div>
                            <button onClick={()=>deleteData(id)}>Not Interested</button>
                        </div>
                    </div>
                )
               
             })
            
        }
        </div>
    )
}   

export default Tours;