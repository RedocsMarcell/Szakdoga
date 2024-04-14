import React from 'react';
import { Link } from 'react-router-dom';
import './HomeAdmin.css';

const HomeAdmin = () => {
  return (
    <div className="container">
      <div className="editorContainer">
        <Link to="/ClassEditor" className="editor">ClassEditor</Link>
        <Link to="/UserEditor" className="editor">UserEditor</Link>
        
      </div>
    </div>
  );
}

export default HomeAdmin;
