import React, {useEffect, useState} from 'react'
import {useCartContext} from '../../context/cartContext'

import * as firebase from 'firebase/app';
import 'firebase/firestore';

import {getFirestore} from '../../firebase'

import {Link} from 'react-router-dom'

export default ()=>{
    const {cart, cleanCart, cartLenght,getTotal, removeItem} = useCartContext();
    const [userOrderId, setUserOrderId] = useState(null);

    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');

    //console.log(cart);

    const submitValue = () => {
        const frmdetails = {
            'First Name' : fName,
            'Last Name' : lName,
            'Phone' : phone,
            'Email' : email
        }
        console.log(frmdetails);
    }

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
    
        <div className='container marginTop'>
            { cartLenght() > 0 && 
            <>
                <div className='row marginTop'>
                    <div className='col'>
                    <h2>Tu carro de compras</h2>            
                    <button type="button" className="btn btn-link noMarginNoPadding" onClick={()=>cleanCart()}>Borrar todos los productos</button>        
                    </div>
                </div>
                <div className='row marginTop'>
                    <div className='col-md-7'>
                        {   
                        cart.map(i => 
                            <div className='row marginTopSmall' key={i.product.id}>
                                <div className='col col-md-3'><img src={i.product.imageId} className='img-fluid border-right border-bottom'></img></div>
                                <div className='col col-md-7'>
                                    <h3>Item <small class="text-muted">{i.product.title}</small></h3>
                                    <h6>Cantidad: <small class="text-muted">{i.count}</small></h6>
                                    <h6>Precio: <small class="text-muted">${i.product.price}</small></h6>
                                    <h6>Total: <small class="text-muted">${Number((i.product.price*i.count).toFixed(2))}</small></h6>
                                    <button type="button" className="btn btn-link noMarginNoPadding" onClick={()=>{removeItem(i.product.id)}}>Borrar item</button>
                                    
                                </div>
                            </div>)
                        }                    
                    </div>
                    <div className='col-md-4 offset-md-1'>

                        <ul class="list-group list-group-flush">
                            <li class="list-group-item active">Finalizá tu compra</li>
                            <li class="list-group-item no-padding">
                                <p>Datos del comprador</p>
                                <form>
                                    <input class="form-control" type="text" placeholder="Nombre" onChange={e => setfName(e.target.value)}/>
                                    <input class="form-control" type="text" placeholder="Apellido" onChange={e => setlName(e.target.value)}/>
                                    <input class="form-control" type="text" placeholder="Teléfono" onChange={e => setPhone(e.target.value)}/>
                                    <input class="form-control" type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
                                    <input class="form-control" type="text" placeholder="Repetir E-mails" onChange={e => setConfirmEmail(e.target.value)}/>
                                </form>
                            </li>
                            <li class="list-group-item">
                            <h4>Items:  <small class="text-muted">{cartLenght()}</small></h4>
                            <h4>Total:  <small class="text-muted">${getTotal()}</small></h4>
                            </li>
                            <li class="list-group-item">
                            <button onClick={()=> submitValue()} type="button" className="btn btn-primary disabled"> Comprar </button>
                            </li>
                        </ul>
                        
                        {userOrderId  && <>
                            <div className='row'>
                                Order Creada: # {userOrderId}
                            </div>  
                            </>   
                
                        }
                    </div>
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