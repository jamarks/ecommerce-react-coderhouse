// muestra el listado de items
import React from 'react';
//import { render } from 'react-dom'  

import Item from '../item/item'


const ItemList = (props) => {
   
    
    return <>
        <div className='row'>
            {props.products.map((p,index) => <Item key={p.id} product={p}></Item>)}
        </div>
  </>
        
}
export default ItemList;
