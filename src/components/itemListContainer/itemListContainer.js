import React, { useState, useEffect} from 'react';
import ItemList from '../itemList/itemList'

function getFromRemote() {

    const var1 = {id:1,name:'Remera Blanca XS',price:19.90,stock:30,img:'https://www.chloe.com/product_image/12452284ue/f/w1370.jpg'};
    const var2 = {id:2,name:'Remera Blanca S',price:21.90,stock:40,img:'https://www.chloe.com/product_image/14075341de/f/w1370.jpg'};
    const var3 = {id:3,name:'Remera Blanca M',price:22.90,stock:100,img:'https://www.chloe.com/product_image/14075341de/f/w1370.jpg'};
    const var4 = {id:4,name:'Remera Blanca L',price:23.90,stock:200,img:'https://www.chloe.com/product_image/14075349ko/f/w1370.jpg'};
    const var5 = {id:5,name:'Remera Blanca XL',price:25.90,stock:25,img:'https://www.chloe.com/product_image/14069848vm/f/w1370.jpg'};
    const var6 = {id:6,name:'Remera Blanca XXL',price:29.90,stock:5,img:'https://www.chloe.com/product_image/14075341de/f/w1370.jpg'};
    
    return new Promise((res,rej)=>{
        setTimeout(() => res([var1,var2,var3,var4,var5,var6]), 500);
    });

}

function ItemListCointainer(props) {

    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        getFromRemote().then(res => {
            //console.log('Loading : ' + loading);
            setProducts(res); 
            setLoading(false); 
            //console.log('Loading : ' + loading);
        });
      }, []);
    
    
    //Home - >itemListContainter > itemList > ítem
    //Home - >itemDetailContainter >itemDetail
    
    return(
        
        <div className='container' style={{paddingTop:20}}>
           {loading?(
               <div className='row justify-content-center'>
               
                    <div className="spinner-grow text-secondary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>  
               </div>
           ):(
                <>
                    <h2>Remeras</h2>
                    <ItemList products={products}></ItemList>
                </>
           )} 
        </div>
        
    )
}
export default ItemListCointainer;