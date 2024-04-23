import React, { useState,useEffect }from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import TestsWindow from '../../../Components/TestWindow/TestsWindow';
import './MyTestsTeacher.css';
import axios from "axios";
import Footer from '../../../Components/Footer/Footer';

const MyTestsTeacher = () => {
  const [userid,setUserid] = useState(-1)//
  const [teacherid, setTeacherid] = useState(-1)

  useEffect(() => {
    // Fetch token from local storage or session storage
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      try {
        const tokenParts = storedToken.split('.');
        const payload = JSON.parse(atob(tokenParts[1]));

        setUserid(payload.roleid)
        setTeacherid(payload.id)
      } catch (error) {
        console.error('Error decoding token:', error);
      }
      
    }
  }, []);

  const testbool= userid === 2





  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [classes,setClasses] = useState([])
  const [usertests,setUsertests] = useState([])
  const [tests,setTests] =useState([])
  const [usernames,setUsernames] = useState([])


  useEffect(() => {
      const fetchClasses = async () => {
        try {
          const response = await axios.post('http://localhost:8081/classes', {  });
          
          setClasses(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchClasses();
    }, []);

    
      const fetchUsertests = async () => {
        try {
          const response = await axios.post('http://localhost:8081/teacherusertests', {  });

          setUsertests(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      
    

    useEffect(() => {
      const fetchTestsForUserTests = async () => {
        try {
          setUsernames([])
          for (const userTest of usertests) {
            const response = await axios.post('http://localhost:8081/teachertests', { 
              userTestId: userTest.TestId,
              selectedClass :  selectedClass,
              selectedSubject : selectedSubject,
              creatorid: teacherid
            });
            
            const testsForUserTest = response.data;
     
            setTests(prevTests => [...prevTests, ...testsForUserTest]);
            setSelectedClass("")
            setSelectedSubject("")
          }
        } catch (error) {
          console.error(error);
        }
      };
    
      
      if (usertests.length > 0) {
        fetchTestsForUserTests();
      }
    }, [usertests]);


    const handleFilter = ()=> 
    {
      fetchUsertests();
    }


    useEffect(() => {
      const fetchUsernames = async () => {
        try {
         
          for (const userTest of usertests) {
            const response = await axios.post('http://localhost:8081/usernames', { 
              UserId: userTest.UserID,
              
            });
            
            const testsForUserTest = response.data;
            

            setUsernames(prevTests => [...prevTests, ...testsForUserTest]);
          }
        } catch (error) {
          console.error(error);
        }
      };
    
      
      if (usertests.length > 0) {
        fetchUsernames();
      }
    }, [usertests]);
    



  
  return (
    
    <div className='wholepage' hidden={testbool ? "" : "hidden"}>
      <Navbar />
      <div className="test-board-container">
            <div className="test-board">
              <div className="row">
                <div className="input-group">
                    <label htmlFor="class">Osztály:</label>
                    <select id="class" value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
                        <option value="">Válassz osztályt...</option>
                        {}
                        {classes.length>0 && classes.map((classItem, index) => (
                          <option key={index} value={classItem.ClassName}>{classItem.ClassName}</option>
                        ))}
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="subject">Tantárgy:</label>
                    <select id="subject" value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
                        <option  value="">Válassz tantárgyat...</option>
                        {}
                        
                        <option value="Matematika">Matematika</option>
                        <option value="Irodalom">Irodalom</option>
                        <option value="Biologia">Biologia</option>
                    </select>
                </div>
              </div>
              <button onClick={handleFilter}>Szűrés</button>
            </div>
          </div>
      
      
    <div className="grid">

   
    { tests.length>0 && usernames.length>0  ? (tests.map((test, index) => (
       <TestsWindow key={index} name ={test.Name}  date={usernames[index] ? usernames[index].Username : ''} id={usertests[index].TestId} usertestid={usertests[index].id}  />
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
 
export default MyTestsTeacher

