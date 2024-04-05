import React, { useState } from 'react';
import './Navbar.css'; // Importáljuk a stíluslapot




function Navbar() {
  // State a lenyíló menü kezeléséhez
  const [menuOpen, setMenuOpen] = useState(false);

  // Főoldalra navigálás függvény
  const navigateToHome = () => {
    window.location.href = 'http://localhost:3000/HomeStudent';
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