import React, { useState,useEffect } from 'react';
import './Navbar.css';
import Logout from '../Logout/Logout'
import axios from "axios"
import { Link  } from 'react-router-dom';




function Navbar() {
  // State a lenyíló menü kezeléséhez
  const [menuOpen, setMenuOpen] = useState(false);
  const [userid,setUserid] = useState(-1)
  const [realuserid,setRealuserid] = useState(-1)
  const [username,setUsername] = useState("")
  

  useEffect(() => {
    // Fetch token from local storage or session storage
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      try {
        const tokenParts = storedToken.split('.');
        const payload = JSON.parse(atob(tokenParts[1]));
        setRealuserid(payload.id)
        setUserid(payload.roleid)
      } catch (error) {
        console.error('Error decoding token:', error);
      }
      
    }
  }, []);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.post('http://localhost:8081/receiveusername', { realuserid });
        
        setUsername(response.data[0].Username);
      } catch (error) {
        console.error(error);
      }
    };
    if (realuserid >= 0)
  {
    fetchUsername();
  }
    
  }, [realuserid]);
  


  const testbool= userid === 3




  // Főoldalra navigálás függvény
  const navigateToHome = () => {
    window.location.href = testbool ? 'http://localhost:3000/HomeStudent': 'http://localhost:3000/HomeTeacher'
  };

  // Lenyíló menü megnyitása
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
  
  
    
    <nav className="navbar">
   
      <div className="navbar-icon" onClick={navigateToHome}>
        {/* Icon placeholder */}
        <img src="../../favicon.ico" alt="navbar-icon" />
      </div>
      <div className="navbar-profile">
      
        {/* Profile picture placeholder */}
        <img src="../../profil_astronaut_icon.png" alt="navbar-icon" onClick={toggleMenu}/>  
      </div>
      <div className='navbar-username'>
        {username}
      </div>
      {menuOpen && (
        <div className="profile-menu">
          <ul>
           
          <Link to={`/MyProfil`} ><li  onClick={() => console.log("My Profil")}>My Profil</li></Link>
      
            <li> {<Logout />}  </li>
          </ul>
        </div>
      )}
    </nav>
    
  );
}

export default Navbar;