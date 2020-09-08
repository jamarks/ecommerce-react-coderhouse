import React, { useState, useEffect} from 'react';
import ItemList from '../itemList/itemList'
import {getFirestore} from '../../firebase'
import {useParams} from 'react-router-dom'

function Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
    }


function ItemListCointainer(props) {

    const { categoryId } = useParams();
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const {error,title}= '';


    useEffect(() => {
        if(categoryId){
            //console.log(categoryId)
            const db = getFirestore();
            const itemCollection = db.collection('items');
            const priceyItems = itemCollection.where('categoryId','==',categoryId);
            const title = categoryId;
            const error = '';
            

            priceyItems.get().then((querySnapshot)=>{
                if(querySnapshot.size===0){
                    const error = 'No hay resultados';
                }
                setLoading(false);
                setProducts(querySnapshot.docs.map(doc=>({...doc.data(), id:doc.id})))
            })

        }else{
            console.log('Sin categoria');
            const db = getFirestore();
            const itemCollection = db.collection('items');
            const priceyItems = itemCollection.where('stock','>',0);
            const title = 'Todos los productos';
            
            priceyItems.get().then((querySnapshot)=>{
                if(querySnapshot.size===0){
                    const error = 'No hay resultados';
                }
                setLoading(false);
                setProducts(querySnapshot.docs.map(doc=>({...doc.data(), id:doc.id})))
            })

        }
        
        
      }, []);

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
                    {error!='' && <ItemList products={products}></ItemList>}
                    {error=='' && <><h2 className="display-4 capitalize">No hay resultados</h2></>}
                    
                </>
           )} 
        </div>
        
    )
}
export default ItemListCointainer;