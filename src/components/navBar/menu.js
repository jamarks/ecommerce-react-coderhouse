import React, { useState, useEffect} from 'react';
import {getFirestore} from '../../firebase'

function Menu(props){

    //useEffect(() => {
        
            
            //const db = getFirestore();
            //const itemCollection = db.collection('items');
            //const categories = [];
            

            //itemCollection.get().then((querySnapshot)=>{
             //   if(querySnapshot.size===0){
              //      const error = 'No hay resultados';
             //   }else{
                    //console.log(querySnapshot.docs.data)
             //   }
                
                //querySnapshot.docs.map(doc=>({...doc.data(), id:doc.id}))
            //})
        
        
      //}, []);
    

    return(
        
        <ul className="navbar-nav">
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categorias
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    {props.categories.map(cat=><a key={cat.name} className="dropdown-item" href={'/items/' + cat.id}>{cat.name}</a>)}
                </div>
            </li>
            </ul>
    
    )
}
export default Menu;