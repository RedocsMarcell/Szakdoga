import React, { useState, useEffect } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import './HomeTeacher.css';

import { Link } from 'react-router-dom';
import Footer from '../../../Components/Footer/Footer';
import WRight from '../../../Components/Window/WRight/WRight';
import WLeft from '../../../Components/Window/WLeft/WLeft';

const HomeTeacher = () => {
  
  

  const [userid,setUserid] = useState(-1)//

  useEffect(() => {
    // Fetch token from local storage or session storage
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      try {
        const tokenParts = storedToken.split('.');
        const payload = JSON.parse(atob(tokenParts[1]));
        
        setUserid(payload.roleid)
      } catch (error) {
        console.error('Error decoding token:', error);
      }
      
    }
  }, []);

  const testbool= userid === 2
  
  return (
    <div className='wholepage' hidden={testbool ? "" : "hidden"}>
      
      <Navbar />

      <div className='DivLeft'>
        <Link to="http://localhost:3000/MyTestsTeacher">
          <WLeft className='LeftWindow'/>
        </Link>
      </div>
      <div className='DivRight'>
        <Link to="http://localhost:3000/TestMaker">
          <WRight className='RightWindow'/>
        </Link>
      </div>
      <Footer/>
    </div>
  );
}

export default HomeTeacher
