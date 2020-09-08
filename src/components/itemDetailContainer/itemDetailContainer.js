import React, { useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import ItemDetail from '../itemDetail/itemDetail'
import {getFirestore} from '../../firebase'


function ItemDetailContainer() {

    const { id } = useParams();
    const [product,setProduct] = useState(null);
    const [loading,setLoading] = useState(true);

   // console.log(id);
   
   useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection('items');
    const item = itemCollection.doc(id);
    
    item.get().then((doc)=>{
        
       if(!doc.exists){
            console.log('item not found')
        }

        console.log('item found')

        setProduct({...doc.data(), id:doc.id})
        
        }).catch((error)=>{
            console.log(error);
        }).finally(()=>{
            setLoading(false);     
        })
    }, []);
    
    return(
        
        <div className='container' style={{paddingTop:20}}>
           {loading?(
               <div className='row justify-content-center'>
               
                    <div className="spinner-grow text-warning" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>  
               </div>
           ):(
                    <>
                        <div className='row'>
                            <div className='col'>
                                <Link to ={'/items'}> Volver al listado </Link>
                                </div>
                        </div>
                        
                        <ItemDetail product={product}></ItemDetail>
                    </>
                
           )} 
        </div>
        
    )
}
export default ItemDetailContainer;