import React from 'react'
import {Link} from 'react-router-dom'


export default ()=>{
    return (
        <> 
        
            <nav id='footer' className=" navbar-light bg-light">
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                        Dev by <Link target='_blank' to={"//twitter.com/javierwasserman"}>jamarks</Link> | Javier Wasserman<br/>
                        Para CoderHouse, con amor
                        </div>
                        <div className='col'>
                        Footer<br/>
                        Footer
                        </div>
                        <div className='col'>
                        Footer<br/>
                        Footer
                        </div>
                    </div>
                </div>
            </nav>
            
        
         </>
    )
}