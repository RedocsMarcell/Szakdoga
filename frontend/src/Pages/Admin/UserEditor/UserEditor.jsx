import React, { useState } from 'react';

const ClassEditor = () => {
  const [classes, setClasses] = useState([]);
  const [newClassName, setNewClassName] = useState('');

  const handleAddClass = () => {
    if (newClassName.trim() !== '') {
      setClasses([...classes, newClassName]);
      setNewClassName('');
    }
  };

  const handleDeleteClass = (index) => {
    const updatedClasses = [...classes];
    updatedClasses.splice(index, 1);
    setClasses(updatedClasses);
  };

  return (
    <div className="class-editor">
      <h2>Class Editor</h2>
      <div className="class-list">
        {classes.map((className, index) => (
          <div key={index} className="class-item">
            <span>{className}</span>
            <button onClick={() => handleDeleteClass(index)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="add-class">
        <input
          type="text"
          placeholder="Enter class name"
          value={newClassName}
          onChange={(e) => setNewClassName(e.target.value)}
        />
        <button onClick={handleAddClass}>Add Class</button>
      </div>
    </div>
  );
};

export default ClassEditor;
