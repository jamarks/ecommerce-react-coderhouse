import React from 'react';
import ItemListCointainer from '../itemListContainer/itemListContainer';
import JumboTron from '../home/jumbotron'


function Home(props) {

    return(
            <>
            <div className='container' style={{paddingTop:20}}>
                <JumboTron/>    
            </div>
            
            <ItemListCointainer/>
           
        </>
    
    )
}
export default Home;