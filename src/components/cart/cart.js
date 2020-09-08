import React, {useEffect, useState} from 'react'
import {useCartContext} from '../../context/cartContext'

import {Link} from 'react-router-dom'

export default ()=>{
    const {cart, cleanCart, cartLenght} = useCartContext();
    //console.log(cart);

    
    
    return(
    
        <div className='container' style={{paddingTop:20}}>
            { cartLenght() > 0 && 
            <>
                <div className='row'>
                    <div className='col'>
                        <h2>Tu carro de compras</h2>                    
                            <span Style='cursor: pointer;' onClick={()=>cleanCart()}>Limpiar Carrito</span>
                        <br/><br/>
                    </div>
                </div>
                <div className='row'>
                    <ul>
                    {   
                    cart.map(i => <li key={i.product.id}> <img src={i.product.imageId} Style='width:50px'></img> {i.product.title} | Cantidad: {i.count} </li>)
                    }
                    </ul>
                </div>
            </>
             } 

              { cartLenght() === 0 && 

                <>
                  <div className='row'>
                    <div className='col'>
                        <h2>Tu carro de compras</h2>                    
                            ¡Tu carrito esta vacío!
                        <br/>
                         Mirá todas las cosas bonitas que tenemos <Link to ={'/' }>aquí</Link>
                        <br/>
                    </div>
                </div>
                </>


            }

        </div>
    
    )
}