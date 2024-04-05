import React from 'react'
import { useState }from 'react';
import './Window.css'

const Window = () => {
        
        
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
           
      </div>

    </div>
  )
}

export default Window
