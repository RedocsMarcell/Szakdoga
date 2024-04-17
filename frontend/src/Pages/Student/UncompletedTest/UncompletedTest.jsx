import React, { useState,useEffect }from 'react';
import TestsWindowUnCompletedTest from '../../../Components/TestsWindowUnCompletedTest/TestsWindowUnCompletedTest'
import Navbar from '../../../Components/Navbar/Navbar'
import axios from 'axios';
import Footer from '../../../Components/Footer/Footer';

function UncompletedTest() {
  
  const [userid,setUserid] = useState(-1)
 
  const [tests, setTests] = useState([])
  const [testinformation,setTestinformation] = useState([])

  const options = { timeZone: "Europe/Budapest", year: 'numeric', month: '2-digit', day: '2-digit' };

  useEffect(() => {
    // Fetch token from local storage or session storage
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      try {
        const tokenParts = storedToken.split('.');
        const payload = JSON.parse(atob(tokenParts[1]));
        console.log(payload)
        setUserid(payload.roleid)
        const useruniqueid = payload.id

        
        axios.post('http://localhost:8081/receiveuncompletedtests', { useruniqueid })
        .then(res => {
          console.log(res.data)
            setTests(res.data)

       } )
        .catch(err => console.log(err));
        
      } catch (error) {
        console.error('Error decoding token:', error);
      }
      
    }
  }, []);

   useEffect (() => {
    let promises = [];
for (let i = 0; i < tests.length; i++) {
    let testid = tests[i].TestId;
    promises.push(
        axios.post('http://localhost:8081/receiveuncompletedtestsoriginal', { testid })
            .then(res => res.data[0])
            .catch(err => console.log(err))
    );
}

Promise.all(promises)
    .then(data => {
        setTestinformation(data);
        console.log(data)
    })
    .catch(error => {
        console.log(error);
    });

   }, [tests])


  
  

  const testbool= userid === 3

  return (
    <div className='wholepage' hidden={testbool ? "" : "hidden"}>
      
      <Navbar />
      
      
      <div className="grid">
    
      
      { tests.length>0 && testinformation.length>0 ? (tests.map((test, index) => (
      <TestsWindowUnCompletedTest key={index} name={testinformation[index].Name} date={new Date(testinformation[index].Date).toLocaleDateString("hu-HU", options).replace(/\//g, '-')} id={testinformation[index].Id} usertestid={tests[index].id}   />
      ))
    ) : (
      <p>No tests available</p>
    )
    }
      
      
      </div>
      <Footer/>
    </div>
  )
}

export default UncompletedTest
