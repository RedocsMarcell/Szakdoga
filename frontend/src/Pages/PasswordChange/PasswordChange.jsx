import Navbar from '../../Components/Navbar/Navbar';
import './PasswordChange.css';
import React, { useState } from 'react';
import Footer from '../../Components/Footer/Footer';

const PasswordChange = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add validation logic here
    if (newPassword !== confirmPassword) {
      setError('Az új jelszó és az új jelszó megerősítése nem egyezik.');
      return;
    }
    // Add code to handle password change
    console.log('Jelszó sikeresen megváltoztatva!');
    // Reset form fields
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setError('');
  };




  return (

    <div className='wholepage'>

      <Navbar />
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="currentPassword">Jelenlegi jelszó:</label>
        <input
          type="password"
          id="currentPassword"
          value={currentPassword}
          onChange={handleCurrentPasswordChange}
          required
        />
      </div>
      <div>
        <label htmlFor="newPassword">Új jelszó:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={handleNewPasswordChange}
          required
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Új jelszó megerősítése:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Jelszó megváltoztatása</button>
    </form>

    <Footer/>

    </div>





  );

}

export default PasswordChange
