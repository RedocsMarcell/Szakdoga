import React, { useState, useEffect } from 'react';
import axios from "axios";

const ClassEditor = () => {
  const [classes, setClasses] = useState([]);
  const [newClassName, setNewClassName] = useState('');


  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.post('http://localhost:8081/classes', {  });
        console.log(response.data)
        setClasses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchClasses();
  }, []);

  const handleAddClass = async (newClassName) => {
    if (newClassName.trim() !== '') {
      try {
        await axios.post('http://localhost:8081/addclass', {
          classname: newClassName,
        });
        let newdict = {
          ClassName: newClassName
        }
        setClasses(prevClasses => [...prevClasses, newdict]);
        setNewClassName('');
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect (() => {
    console.log("osztalyok",classes)
  }, [classes])
  

  const handleDeleteClass = (index,classname) => {
    const updatedClasses = [...classes];
    updatedClasses.splice(index, 1);
    setClasses(updatedClasses);
    axios.post('http://localhost:8081/deleteclass', {
                    classname: classname, 
                })
    }
  

  return (
    <div className="class-editor">
      <h2>Class Editor</h2>
      <div className="class-list">
        {classes.map((className, index) => (
          <div key={index} className="class-item">
            <span>{className.ClassName}</span>
            <button onClick={() => handleDeleteClass(index,className.ClassName)}>Delete</button>
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
        <button onClick={() => handleAddClass(newClassName)}>Add Class</button>
      </div>
      
    </div>
  );
};

export default ClassEditor;
