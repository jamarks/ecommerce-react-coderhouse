import React, { useState, useEffect} from 'react';
import ItemList from '../itemList/itemList'
import {getFirestore} from '../../firebase'
import {useParams} from 'react-router-dom'



function ItemListCointainer(props) {

    const { categoryId } = useParams();
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(false)
    


    useEffect(() => {
        if(categoryId){
            
            const db = getFirestore();
            const itemCollection = db.collection('items');
            const priceyItems = itemCollection.where('categoryId','==',categoryId);
            
            priceyItems.get().then((querySnapshot)=>{
                if(querySnapshot.size===0){
                    setError(true);
                }
                setLoading(false);
                setProducts(querySnapshot.docs.map(doc=>({...doc.data(), id:doc.id})))
            })

        }else{
            
            const db = getFirestore();
            const itemCollection = db.collection('items');
            const priceyItems = itemCollection.where('stock','>',0);
            
            
            priceyItems.get().then((querySnapshot)=>{
                if(querySnapshot.size===0){
                    setError(true);
                }
                setLoading(false);
                setProducts(querySnapshot.docs.map(doc=>({...doc.data(), id:doc.id})))
            })

        }
        
        
      }, [categoryId]);

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
                    <h2 className="display-4 capitalize">{categoryId}</h2>
                    {!error && <ItemList products={products}></ItemList>}
                    {error && <><h2 className="display-4 capitalize">No hay resultados</h2></>}
                    
                </>
           )} 
        </div>
        
    )
}
export default ItemListCointainer;