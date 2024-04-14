import React, { useState,useEffect } from 'react';
import './Navbar.css'; // Importáljuk a stíluslapot




function Navbar() {
  // State a lenyíló menü kezeléséhez
  const [menuOpen, setMenuOpen] = useState(false);
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
        <img src="favicon.ico" alt="navbar-icon" />
      </div>
      <div className="navbar-profile">
      
        {/* Profile picture placeholder */}
        <img src="favicon.ico" alt="navbar-icon" onClick={toggleMenu}/>  
      </div>
      {menuOpen && (
        <div className="profile-menu">
          <ul>
            <li onClick={() => console.log("Jelszó módosítás")}>Jelszó módosítás</li>
            <li onClick={() => console.log("My Profil")}>My Profil</li>
            <li onClick={() => console.log("Kijelentkezés")}>Kijelentkezés</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;