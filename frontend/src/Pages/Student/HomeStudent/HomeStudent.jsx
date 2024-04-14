import React, { useState,useEffect }from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../Components/Navbar/Navbar';
import './HomeStudent.css';
import Window from '../../../Components/Window/Window';

const HomeStudent = () => {

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

  const testbool= userid === 3

  return (
    <div className='wholepage' hidden={testbool ? "" : "hidden"}>
      <Navbar />
      
      <div className='DivLeft'>
        <Link to="http://localhost:3000/MyTestsStudent">
          <Window className='LeftWindow'/>
        </Link>
      </div>
      <div className='DivRight'>
        <Link to="http://localhost:3000/UncompletedTest">
          <Window className='RightWindow'/>
        </Link>
      </div>
    </div>
  );
}

export default HomeStudent;
