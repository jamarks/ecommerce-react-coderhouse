// muestra el item
import React, {useState} from 'react';
import ItemCount from '../itemCount/itemCount';
import {useCartContext} from '../../context/cartContext';

const ItemDetail = (product) => {

        
        const [count,setCount] = useState();
        const {addItem} = useCartContext();
        product = product.product
        //console.log('itemDetail')
        //console.log(product);
        //console.log(product.product)
        //console.log(product.product.description)
        const options = [{min: 1, max: product.stock}]
        
        function onItemCountChange(value){
            setCount(value);        
        }

         return (
                
                <div className="row">
                    <div className="col-md-7">
                    <h1 className="display-4">{product.title}</h1>
                        Precio: $<span className='price'>{product.price}</span><br/>
                        <div className='row'>
                            <div className='col col-xs-6 col-md-3'>
                                <ItemCount options={options} onChange={onItemCountChange}></ItemCount>
                            </div>

                            <div className='col col-xs-6 col-md-4'>
                                <button onClick={()=> addItem({product,count})} type="button" className="btn btn-primary">Comprar <span className="badge badge-light">{count}</span></button>
                            </div>
                        </div>

                        <br/><br/>
                        <b>Sobre {product.name}</b>
                        <br/>
                        <p className='description'>{product.description}</p>
                    </div>
                    <div className="col col-md-5">
                        <img src={product.imageId} className='img-fluid' alt={product.title}></img>
                    </div>
                </div>
        )
}



export default ItemDetail;
