import React, { useState, useEffect} from 'react';

function ItemCount({options, onChange}) {
    
    // /console.log(options);
    options = options[0];
    const [cantidad, setCount] = useState(options.min);

    useEffect(()=>{
        onChange(cantidad);
            return()=>{
        }
      })

      
    function dedact(min){
        if(cantidad>min){
            setCount(parseInt(cantidad)-1);
        }     
    }
    
    function sum(max){
        if(cantidad<max){
            setCount(parseInt(cantidad)+1);
         }
    }
    
    return(

            <div className='itemCounter'>
                <button id='dedact' name='dedact' onClick={()=>dedact(options.min)} disabled={cantidad===options.min}> - </button>
                <span>{cantidad}</span>
                <button id='sum' name='sum' onClick={()=>sum(options.max)} disabled={cantidad===options.max}> + </button>
            </div>
        
    )
}
export default ItemCount;
