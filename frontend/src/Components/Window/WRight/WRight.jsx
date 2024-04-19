import React from 'react'
import { useState }from 'react';
import './WRight.css'

const WRight = () => {
        
        
        const [bigWindow, setBigWindow] = useState(false);
        const toggleWindowSize = () => {
            setBigWindow(!bigWindow);
          };
    return (
    <div >
          
          <div
          
        className={`window ${bigWindow ? 'big-window' : ''}`}
        onMouseLeave={toggleWindowSize}
        onMouseEnter={toggleWindowSize}
     
      >
           <img className='img' src="path/to/your/image.jpg" alt="Description of the image" />
      </div>

    </div>
  )
}

export default WRight
