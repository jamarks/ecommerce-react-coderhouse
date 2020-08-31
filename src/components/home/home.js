import React from 'react';
import ItemListCointainer from '../itemListContainer/itemListContainer';
import JumboTron from '../home/jumbotron'


function Home(props) {

    return(
            <>
            <div className='container' style={{paddingTop:20}}>
                <JumboTron/>    
                Home. Hola {props.children} 
            </div>
            
            <ItemListCointainer/>
           
        </>
    
    )
}
export default Home;