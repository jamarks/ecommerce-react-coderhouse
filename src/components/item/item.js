// muestra el item
import React from 'react';
import {Link} from 'react-router-dom'


const Item = (product) => {
        product = product.product // 

        //const options = [{
                //min: 1, 
                //max: product.stock}]

       // console.log(product);

         return (

                <div className='col col-12 col-md-3 product'>
                    <h4>{product.title}</h4>
                    <Link to ={'/item/' + product.id}>
                        <img src={product.imageId} className='img-fluid' alt={product.title}></img>
                    </Link>
                    
                    Precio: $<span className='price'>{product.price}</span><br/>
                    <Link to ={'/item/' + product.id}> Ver mas </Link>
                </div>
        )

}



export default Item;
