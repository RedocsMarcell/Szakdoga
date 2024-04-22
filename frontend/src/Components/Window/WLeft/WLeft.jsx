import React, { useState } from 'react';
import './WLeft.css';

const WLeft = () => {
      
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
     <img className='wlimg' src="../../open-book.png" alt="Description of the image" />
</div>

</div>
)
}
export default WLeft;
