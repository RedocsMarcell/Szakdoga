import React, { useState, useEffect } from 'react';

import axios from "axios"

const MyProfilTeacher = () => {
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
            const response = await axios.post('http://localhost:8081/classes', { id });
    
            
            const Data = {
            
                username: 'diák',
                classId: 3,
                email: 'diak@gmail.com',
                roleId: 3
            };
    
            setProfileData(Data);
            setLoading(false);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchUser();
      }, [id]);

    

    return (
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
    );
};

export default MyProfilTeacher;
