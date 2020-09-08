import React, {useContext, useState, useEffect} from 'react';
import { render } from '@testing-library/react';

export const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);
export function CartProvider({defaultValue = [], children}){

    const [cart, setCart] = useState(defaultValue);
    
    useEffect(() => {
        //console.log('Montaje de CartProvider');

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
        //cart.map()
        setCart(temp);
        //console.log(temp);
        
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
        let cantidad = 0;
        cart.map(i=>{
            cantidad = cantidad + i.count;

        })
     
    //   console.log(cantidad);
        return(cantidad)

    }

    function cleanCart(){
        setCart([]);
        //console.log('limpio')
    }   

    return (
            <CartContext.Provider value={{cart, addItem, cartLenght, cleanCart}}>
                {children}
            </CartContext.Provider>
        )

}