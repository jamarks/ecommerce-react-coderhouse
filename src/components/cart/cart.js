import React, {useEffect, useState} from 'react'
import {useCartContext} from '../../context/cartContext'

export default ()=>{
    const {cart, cleanCart, cartLenght} = useCartContext();
    console.log(cart);

    
    
    return(
    
        <div className='container' style={{paddingTop:20}}>
            <div className='row'>
                <div className='col'>
                    <h2>Tu carro de compras</h2>                    
                    {
                    cartLenght > 0 && 
                        <small><span Style='cursor: pointer;' onClick={()=>cleanCart()}>Limpiar Carrito</span></small>
                    }
                    <br/><br/>
                </div>
            </div>
            <div className='row'>
                <ul>
            {   
                cart.map(i => <li key={i.product.id}> <img src={i.product.img} Style='width:50px'></img> {i.product.name} | Cantidad: {i.count} </li>)
            }
                </ul>
            </div>

        </div>
    
    )
}