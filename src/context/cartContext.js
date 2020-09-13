import React, {useContext, useState, useEffect} from 'react';
import { render } from '@testing-library/react';

export const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);
export function CartProvider({defaultValue = [], children}){

    const [cart, setCart] = useState(defaultValue);

    // TODO
    // Validar q si es el mismo item, agregarla cantidad y no un nuevo item en productos
    // Deberiamos ir teniendo el total actualizado cuando se agrega o se quita?
    // poder quitar por id.
    // usar un reduce para sumar el total
        //return cart.reduce((prev, next) =>     (prev + (next.quantity * next.item.price)), 0)
    
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
        if(!isInCart(item.product.id)){
            console.log('no existe')
            const temp = [...cart, item];
            setCart(temp);
        }
        else{
            // aca hay q sumar
            let cartTemporal = cart
            console.log(cartTemporal)

            for (var i in cartTemporal) {
                console.log(cartTemporal[i].product.id)
                console.log(item.product.id)
                if (cartTemporal[i].product.id ===  item.product.id) {
                    cartTemporal[i].count = cartTemporal[i].count + item.count;
                   break; 
                }
              }
            setCart(cartTemporal)
            console.log('existe')

        }
        //console.log(temp);
        
    }

    function removeItem(item){
        // no implementado
        console.log('remove item ' + item);
    }

    function getFromCart(id){
        return cart.find(obj=>obj.product.id === id)
    }

    function isInCart(itemId){        
        return itemId === undefined ? undefined : getFromCart(itemId) !== undefined

        //console.log('is item in cart ' + item);

    }

    function cartLenght(){
        let cantidad = 0;
        cart.map(i=>{
            cantidad = cantidad + i.count;
        })

        return(cantidad)

    }

    function getTotal(){
        let total = 0;
        console.log('getTotal')
        cart.map(i=>{
            total = total + (i.count*i.product.price);
        })
        return(Number((total).toFixed(2)))

    }
    function cleanCart(){
        setCart([]);    
    }   

    return (
            <CartContext.Provider value={{cart, addItem, cartLenght, cleanCart, getTotal}}>
                {children}
            </CartContext.Provider>
        )

}