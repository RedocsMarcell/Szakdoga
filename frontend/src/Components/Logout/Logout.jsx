import React from 'react'

const handleLogout = () => {
  localStorage.removeItem("token")
  window.location.href = 'http://localhost:3000'
}


function Logout() {
  return (
    <div className='Logout' onClick={handleLogout}> 
      Kijelentkezés
    </div>
  )
}

export default Logout
