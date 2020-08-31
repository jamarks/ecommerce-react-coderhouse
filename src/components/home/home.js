import React from 'react';
import ItemListCointainer from '../itemListContainer/itemListContainer';


function Home(props) {

    return(
            <>
            <div className='container' style={{paddingTop:20}}>
                Home. Hola {props.children} 
            </div>
          
            <ItemListCointainer/>
           
        </>
    
    )
}
export default Home;