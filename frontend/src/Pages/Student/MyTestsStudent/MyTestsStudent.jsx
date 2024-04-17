import React, { useState,useEffect }from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import './MyTestsStudent.css';
import TestsWindow from '../../../Components/TestWindow/TestsWindow';
import Footer from '../../../Components/Footer/Footer';

const MyTestsStudent = () => {
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
      <div className="grid">

      <TestsWindow name = "Teszt1" date = "2023.10.12" score = "10/10" />

      <TestsWindow name = "Teszt2" date = "2023.10.12" score = "10/10"/>

      <TestsWindow name = "Teszt3" date = "2023.10.12" score = "10/10"/>

      <TestsWindow name = "Teszt4" date = "2023.10.12" score = "10/10"/>

      <TestsWindow name = "Teszt5" date = "2023.10.12" score = "10/10"/>

      <TestsWindow name = "Teszt6" date = "2023.10.12" score = "10/10"/>

      <TestsWindow name = "Teszt7" date = "2023.10.12" score = "10/10"/>

      <TestsWindow name = "Teszt8" date = "2023.10.12" score = "10/10"/>

      <TestsWindow name = "Teszt9" date = "2023.10.12" score = "10/10"/>
      
      </div>
      <Footer/>
    </div>

     
   

     
  
  )
}

export default MyTestsStudent
