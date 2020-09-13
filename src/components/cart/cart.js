import React, {useEffect, useState} from 'react'
import {useCartContext} from '../../context/cartContext'

import * as firebase from 'firebase/app';
import 'firebase/firestore';

import {getFirestore} from '../../firebase'

import {Link} from 'react-router-dom'

export default ()=>{
    const {cart, cleanCart, cartLenght,getTotal} = useCartContext();
    const [userOrderId, setUserOrderId] = useState(null);
    //console.log(cart);

    async function createOrder(){
        //const order = { buyer: { name , phone, email }, items: [{ id, title, price, quantity }, {}, {} ], total }
        const buyer = {
            name:'javier', phone:'54911368657035',email:'jamarks@gmail.com'
        }
      
        const items = cart.map(c=>({
            id: c.product.id,title: c.product.title, price: c.product.price, quantity: c.count
        }))
            
      
        const db = getFirestore()


        // iterar por cada item y cambiar el stock

        const orders = db.collection('orders');
        

        const newOrder = {
            buyer,
            items:items,
            date:firebase.firestore.FieldValue.serverTimestamp(),
            total:'11111'
        }

       
        //orders.add(newOrder).then(
        //    ({id})=>
        //    {
        //        console.log(id)

        //    },err => {
        //        console.log('Error');  
        //    })

            try {            
                const { id } = await orders.add(newOrder);
                 console.log('id');
                 setUserOrderId(id);
                } 
            catch(err) {            // seteamos feedback para el user            
                console.log('Error');        
            }
        console.log(newOrder);
    }
    
    return(
    
        <div className='container' style={{paddingTop:20}}>
            { cartLenght() > 0 && 
            <>
                <div className='row'>
                    <div className='col'>
                        <h2>Tu carro de compras</h2>                    
                            <span className='pointer' onClick={()=>cleanCart()}>Limpiar Carrito</span>
                        <br/><br/>
                    </div>
                </div>
                <div className='row cartList'>
                    <ul>
                    {   
                    cart.map(i => 
                        <div key={i.product.id}> 
                            <img src={i.product.imageId}></img> 
                            {i.product.title} | Cantidad: {i.count} | $ unitario: ${i.product.price} 
                        </div>)
                    }
                    </ul>
                </div>
                <div className='row'>
                    Total: ${getTotal()}
                </div>
                <div className='row'>
                    <button onClick={()=> createOrder()} type="button" className="btn btn-primary"> Comprar </button>
                </div>
                
                {userOrderId  && <>
                    <div className='row'>
                        Order Creada: # {userOrderId}
                    </div>                
                </>
                }

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