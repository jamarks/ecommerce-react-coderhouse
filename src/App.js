import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Footer from './components/footer/footer'
import './App.css';
import NavBar from './components/navBar/NavBar';
import Home from './components/home/home';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import ItemListCointainer from './components/itemListContainer/itemListContainer';
import Cart from './components/cart/cart';
import GenericNotFound from './components/general/notFound'
import {CartProvider} from './context/cartContext'

const categories = [{name:'Remeras',id: 'remeras'},{name:'Pantalones',id: 'pantalones'}]

const App = () => {

  
  return (
        <CartProvider>
          <BrowserRouter>
          <NavBar categories={categories}/>
            <Switch>
                <Route exact path='/'>
                  <Home/>
                </Route>
                <Route path='/item/:id'>
                  <ItemDetailContainer/>
                </Route>
                <Route path='/categories/:categoryId'>
                  <ItemListCointainer/>
                </Route>
                <Route path='/items/'>
                  <Redirect to="/" />
                </Route>
                <Route path='/cart'>
                  <Cart></Cart>
                </Route>
                <Route path='*' exact={true} component={GenericNotFound} />

            </Switch>
          <Footer/>
          </BrowserRouter>
        </CartProvider>
        //https://stackblitz.com/edit/coderhouse-react-context-regular
  
  )
}


export default App;
