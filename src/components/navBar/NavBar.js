import React,{ useEffect }  from 'react'
import Cart from './cartIcon'
import Logo from './logo'
import Menu from './menu'

function NavBar(props) {

    useEffect(() => {
        //network call
    
        return () => {
            //desmontado
        }
    }, [])
    
    return (
    
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Logo/>
            <div className="collapse navbar-collapse" id="navbarNav">
                <Menu categories={props.categories}/>
            </div>
            <div className='carrito'>
                <Cart/>
            </div>
        </nav>
  

    )

}
export default NavBar;
