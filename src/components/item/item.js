// muestra el item
import React from 'react';
import ItemCount from '../itemCount/itemCount';
import {Link} from 'react-router-dom'


const Item = (product) => {
        product = product.product // 

        const options = [{
                min: 1, 
                max: product.stock}]

         return (

                <div className='col col-12 col-md-3 product'>
                    <h4>{product.name}</h4>
                    <Link to ={'/item/' + product.id}>
                                <img src={product.img} className='img-fluid'></img>
                    </Link>
                    <p className='description'>{product.description}</p>
                    Precio: $<span className='price'>{product.price}</span><br/>
                    <Link to ={'/item/' + product.id}> Ver mas </Link>
                </div>
        )

}



export default Item;
