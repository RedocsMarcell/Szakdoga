import React, { useState,useEffect }from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../Components/Navbar/Navbar';
import './HomeStudent.css';
import Footer from '../../../Components/Footer/Footer';
import WLeft from '../../../Components/Window/WLeft/WLeft';
import WRight from '../../../Components/Window/WRight/WRight';

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
  useEffect(()=> {
    console.log(userid)
  }, [userid])

  const testbool= userid === 3

  return (
    <div className='wholepage' hidden={testbool ? "" : "hidden"}>
      <Navbar />
      
      <div className='DivLeft'>
       
        <Link to="http://localhost:3000/MyTestsStudent">
          <WLeft className='LeftWindow'/>
        </Link>
        
      </div>
      <div className='DivRight'>
        <Link to="http://localhost:3000/UncompletedTest">
          <WRight className='RightWindow'/>
        </Link>
      </div>
      <Footer/>
    </div>
 
);
}



export default HomeStudent;
