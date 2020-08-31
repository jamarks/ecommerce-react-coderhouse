import React from 'react'

const menu = (props) =>{
    return(
        
        <ul className="navbar-nav">
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categorias
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    {props.categories.map(cat=><a className="dropdown-item" href="#">{cat.name}</a>)}
                </div>
            </li>
            </ul>
    
    )
}
export default menu;