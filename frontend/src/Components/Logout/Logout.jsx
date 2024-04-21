import React from 'react'
import './Logout.css'


const handleLogout = () => {
  localStorage.removeItem("token")
  window.location.href = 'http://localhost:3000'
}


function Logout() {
  return (
    <div className='Logout redText' onClick={handleLogout}> 
  Kijelentkezés
</div>
  )
}

export default Logout
