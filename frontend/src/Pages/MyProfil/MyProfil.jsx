import React, { useState, useEffect } from 'react';
import './MyProfil.css'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import axios from "axios"


const MyProfil = () => {
    const [profileData, setProfileData] = useState({});
    const [loading, setLoading] = useState(true);
    const[id,setId] =useState(-1)

    useEffect(() => {
        
            // Fetch token from local storage or session storage
            const storedToken = localStorage.getItem('token');
            if (storedToken) {
              try {
                const tokenParts = storedToken.split('.');
                const payload = JSON.parse(atob(tokenParts[1]));
                
                setId(payload.id)
              } catch (error) {
                console.error('Error decoding token:', error);
              }
              
             }
    }, []);

    useEffect(() => {
        const fetchUser = async () => {
          try {
            const response = await axios.post('http://localhost:8081/profiledetails', { id });
       
            if(response.data.length>0)
            {
                let classid = response.data[0].class_Id
                const response2 = await axios.post('http://localhost:8081/profileclass', { classid });
                let roleid = response.data[0].Role_Id
                const response3 = await axios.post('http://localhost:8081/profilerole', { roleid });
                
                const Data = {
            
                    username: response.data[0].Username,
                    classId: response2.data[0].ClassName,
                    email: response.data[0].Email,
                    roleId: response3.data[0].Name
                };
        
                setProfileData(Data);
                setLoading(false);
            }
            
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchUser();
      }, [id]);

    

    return (
        <div className='wholepage'>
        <Navbar/>
        <Footer/>
        <div className="profile-container">
          
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <h2>My Profile</h2>
                    <div className="profile-info">
                      
                        <p><strong>Username:</strong> {profileData.username}</p>
                        <p><strong>Class:</strong> {profileData.classId}</p>
                        <p><strong>Email:</strong> {profileData.email}</p>
                        <p><strong>Role::</strong> {profileData.roleId}</p>
                    </div>
                </>
            )}
        </div>
        </div>
    );
};

export default MyProfil;
