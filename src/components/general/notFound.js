import React from 'react'
import Lottie from 'react-lottie'
import notfoundimage from '../../assets/lottie/4042.json'
export default ()=>{

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: notfoundimage,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      
    return(
        <div className='marginTop'>
            
            <center>
            <h3> Oops! </h3>
            <Lottie className="lotties"
            options={defaultOptions}
              height={400}
              width={400}/>
            </center>
            </div>
    )
}

