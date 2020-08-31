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

                <div className='col-3 product'>
                    <h3>{product.name}</h3>
                    <Link to ={'/item/' + product.id}>
                                <img src={product.img} width='100%'></img>
                    </Link>
                    <p className='description'>{product.description}</p>
                    Precio: $<span className='price'>{product.price}</span><br/>
                    <Link to ={'/item/' + product.id}> Ver mas </Link>
                </div>
        )

}



export default Item;
