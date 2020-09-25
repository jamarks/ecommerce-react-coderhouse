import React, {useContext, useState, useEffect} from 'react';

export const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);
export function CartProvider({defaultValue = [], children}){

    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem('cart')) || defaultValue);
    
    useEffect(() => {
        localStorage.setItem('cart',  JSON.stringify(cart)); 
      }, [cart]);
 
      
    // TODO
    // Mejorar el total: usar un reduce para sumar 
    //return cart.reduce((prev, next) =>     (prev + (next.quantity * next.item.price)), 0)
    
    //useEffect(() => {
    //    return () => {
    //    }
    //}, [])

    function addItem(item){
        // fijarse si existe, solo sumarle al quantity
        if(!isInCart(item.product.id)){            
            const temp = [...cart, item];
            setCart(temp);
        }
        else{
            // aca hay q sumar
            let cartTemporal = [...cart]

            for (var i in cartTemporal) {
                if (cartTemporal[i].product.id ===  item.product.id) {
                    cartTemporal[i].count = cartTemporal[i].count + item.count;
                   break; 
                }
              }
            setCart(cartTemporal);            
        
        }
        
    }

    function removeItem(itemId){
        let cartTemporal = [...cart]
        
        for (var i in cartTemporal) {
            if (cartTemporal[i].product.id ===  itemId) {
                cartTemporal.splice(i,i+1);
               break; 
            }
        }

        setCart(cartTemporal);          

    }

    function getFromCart(id){
        return cart.find(obj=>obj.product.id === id)
    }

    function isInCart(itemId){        
        return itemId === undefined ? undefined : getFromCart(itemId) !== undefined

    }

    function cartLenght(){
        let cantidad = 0;
        cart.forEach(i=>{
            cantidad = cantidad + i.count;
        })
        return(cantidad)

    }

    function getTotal(){
        let total = 0;
        //console.log('getTotal')
        cart.forEach(i=>{
            total = total + (i.count*i.product.price);
        })
        return(Number((total).toFixed(2)))

    }
    function cleanCart(){
        setCart([]);    
        
    }   

    return (
            <CartContext.Provider value={{cart, addItem, cartLenght, cleanCart, getTotal, removeItem}}>
                {children}
            </CartContext.Provider>
        )

}