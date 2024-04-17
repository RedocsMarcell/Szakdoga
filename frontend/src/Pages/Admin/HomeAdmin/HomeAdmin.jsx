import React from 'react';
import { Link } from 'react-router-dom';
import './HomeAdmin.css';
import Footer from '../../../Components/Footer/Footer';

const HomeAdmin = () => {
  return (
    <div className="container">
      <div className="editorContainer">
        <Link to="/ClassEditor" className="editor">ClassEditor</Link>
        <Link to="/UserEditor" className="editor">UserEditor</Link>
        
      </div>
      <Footer/>
    </div>
  );
}

export default HomeAdmin;
