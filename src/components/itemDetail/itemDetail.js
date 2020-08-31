// muestra el item
import React, {useEffect, useState} from 'react';
import ItemCount from '../itemCount/itemCount';
import {useCartContext} from '../../context/cartContext';

const ItemDetail = (product) => {

        
        const [count,setCount] = useState(1)
        const {addItem} = useCartContext();

        useEffect(()=>{
            //console.log('Montaje');
            return ()=>{
              //  console.log('Desmontaje');
            }
        },[]);
    
        product = product.product // 
        //console.log(product);
        
        const options = [{
                min: 1, 
                max: product.stock}]
        
        function onItemCountChange(value){
            setCount(value);        
        }

         return (
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <h1>{product.name}</h1>
                        Precio: $<span className='price'>{product.price}</span><br/>
                        <div className='row'>
                            <div className='col-3'>
                                <ItemCount options={options} onChange={onItemCountChange}></ItemCount>
                            </div>
                            <div className='col-4'>
                            <button onClick={()=> addItem({product,count})} type="button" className="btn btn-primary">Comprar ({count} u) </button>
                            </div>
                        </div>
                        <br/><br/>
                        <b>Sobre {product.name}</b>
                        <br/>
                        <p className='description'>{product.description}</p>
                    </div>
                    <div className="col-6">
                        <img src={product.img} width='100%'></img>
                    </div>
                </div>
            </div>
        )

}



export default ItemDetail;
