import React, {useContext, useState, useEffect} from 'react';
import { render } from '@testing-library/react';

export const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);
export function CartProvider({defaultValue = [], children}){

    const [cart, setCart] = useState(defaultValue);
    const [cartCount, setCartCount] = useState();
    
    useEffect(() => {
        //console.log('Montaje de CartProvider');
        setCartCount(0);

        return () => {
            
        }
    }, [])

    useEffect(() => {
        //console.log(cart);      
        return () => {
            //
        }
    })

    

    function addItem(item){
        // fijarse si existe, solo sumarle al quantity
        const temp = [...cart, item];
        //console.log(cartCount);
        setCartCount(cartCount+item.count);
        //console.log(cartCount);
        setCart(temp);
        console.log(temp);
        
    }

    function removeItem(item){
        console.log('remove item ' + item);
    }

    function getFromCart(id){
        return cart.find(obj=>obj.product.id === id)
    }

    function isInCart(itemId){
        return itemId === undefined ? undefined : getFromCart() !== undefined

        //console.log('is item in cart ' + item);

    }

    function cartLenght(){
        // porque no funciona esto??!
        let cantidad = 0;
        cart.map(i=>{
            //console.log(i.count);
            cantidad = cantidad + i.count;

        })
        console.log(cart.length);
       // return( cart.length)

    }

    function cleanCart(){
        setCart([]);
        //console.log('limpio')
    }   

    return (
            <CartContext.Provider value={{cart,cartCount, addItem, cartLenght, cleanCart}}>
                {children}
            </CartContext.Provider>
        )

}