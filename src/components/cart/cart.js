import React, { useState} from 'react'
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
    const [enableSubmit, setEnableSubmit] = useState(false)
    

    

    const validEmail = (value) =>{
        setConfirmEmail(value);
        //console.log('email:' + email + ' confirm:' + confirmEmail);
        if(email && confirmEmail){
            if(email===value)
                setEnableSubmit(true)
            else
                setEnableSubmit(false)
        }else{
            setEnableSubmit(false)
        }
    }

    async function createOrder(){
        //const order = { buyer: { name , phone, email }, items: [{ id, title, price, quantity }, {}, {} ], total }
        const buyer = {
            name:fName, lastName:lName, phone:phone,email:email
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
                 //console.log('id');
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
                                <div className='col col-md-3'>
                                    <Link to ={'/item/' + i.product.id}>
                                        <img src={i.product.imageId} className='img-fluid border-right border-bottom' alt={i.product.title}></img>
                                    </Link>
                                </div>
                                <div className='col col-md-7'>
                                    <h3>Item <small className="text-muted">{i.product.title}</small></h3>
                                    <h6>Cantidad: <small className="text-muted">{i.count}</small></h6>
                                    <h6>Precio: <small className="text-muted">${i.product.price}</small></h6>
                                    <h6>Total: <small className="text-muted">${Number((i.product.price*i.count).toFixed(2))}</small></h6>
                                    <button type="button" className="btn btn-link noMarginNoPadding" onClick={()=>{removeItem(i.product.id)}}>Borrar item</button>
                                    
                                </div>
                            </div>)
                        }                    
                    </div>
                    <div className='col-md-4 offset-md-1'>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item active">Finalizá tu compra</li>
                            <li className="list-group-item no-padding">
                                <p>Datos del comprador</p>
                                <form>
                                    <input className="form-control" type="text" placeholder="Nombre" value={fName} onChange={e => setfName(e.target.value)}/>
                                    <input className="form-control" type="text" placeholder="Apellido" value={lName} onChange={e => setlName(e.target.value)}/>
                                    <input className="form-control" type="text" placeholder="Teléfono" value={phone} onChange={e => setPhone(e.target.value)}/>
                                    <input className="form-control" type="text" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                                    <input className="form-control" type="text" placeholder="Repetir E-mails" value={confirmEmail} onChange={e => validEmail(e.target.value)}/>
                                </form>
                            </li>
                            <li className="list-group-item">
                            <h4>Items:  <small className="text-muted">{cartLenght()}</small></h4>
                            <h4>Total:  <small className="text-muted">${getTotal()}</small></h4>
                            </li>
                            <li className="list-group-item">
                                {enableSubmit && <button onClick={()=> createOrder()} type="button" className="btn btn-primary"> Comprar </button>}
                                {!enableSubmit && <button onClick={()=> alert('Los emails no coinciden')} type="button" className="btn btn-primary disabled"> Comprar </button>}
                                {userOrderId  && <> <div className='row'> Order Creada: # {userOrderId}</div>  
                            </>   
                
                        }
                            </li>
                        </ul>
                        
                        
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