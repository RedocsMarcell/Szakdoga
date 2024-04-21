import React, { useState,useEffect }from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import TestBoard from '../../../Components/TestComp/TestBoard/TestBoard';
import Footer from '../../../Components/Footer/Footer';

const TestMaker = () => {
  const [userid,setUserid] = useState(-1)//
  const [teacherid,setTeacherid] = useState(-1)

  useEffect(() => {
    // Fetch token from local storage or session storage
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      try {
        const tokenParts = storedToken.split('.');
        const payload = JSON.parse(atob(tokenParts[1]));
        console.log(payload.id)
        setTeacherid(payload.id)
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
      
     <TestBoard teacherid ={teacherid} />
     
    

    </div>
     
   

     
  
  )
}

export default TestMaker

