import React, { useState,useEffect }from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import TestBoardWriter from '../../../Components/TestComp/TestBoardWriter/TestBoardWriter'
import { useParams } from 'react-router-dom';
import Footer from '../../../Components/Footer/Footer';

const TestWriter = () => {
  const [userid,setUserid] = useState(-1)//
  let {id} =useParams()
  console.log(id)
  

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
      
      
      <TestBoardWriter  />
     
      
    </div>
     
   

     
  
  )
}

export default TestWriter
