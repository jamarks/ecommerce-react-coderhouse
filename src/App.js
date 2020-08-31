import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Footer from './components/footer/footer'
import './App.css';
import NavBar from './components/navBar/NavBar';
import Home from './components/home/home';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import ItemListCointainer from './components/itemListContainer/itemListContainer';
import Cart from './components/cart/cart';

import {CartProvider} from './context/cartContext'

const categories = [{name:'Remeras',id: 'remeras'},{name:'Camisas',id: 'camisas'}]

const App = () => {

  
  return (
        <CartProvider>
          <BrowserRouter>
          <NavBar categories={categories}/>
            <Switch>
                <Route exact path='/'>
                  <Home>Javier</Home>      
                </Route>
                <Route path='/item/:id'>
                  <ItemDetailContainer/>
                </Route>
                <Route path='/items'>
                  <ItemListCointainer/>
                </Route>
                <Route path='/cart'>
                  <Cart></Cart>
                </Route>

            </Switch>
          <Footer/>
          </BrowserRouter>
        </CartProvider>
        //https://stackblitz.com/edit/coderhouse-react-context-regular
  
  )
}


export default App;
