import React,{useState, useEffect} from 'react'
import axios from "axios"

const UserEditor = () => {
  const [users,setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.post('http://localhost:8081/adminusers', {  });
        console.log(response.data)
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);



  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Class_ID</th>
            <th>Enable</th>
            <th>Email</th>
            <th>Role ID</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.Username}</td>
              <td>{user.Password}</td>
              <td>{user.class_Id}</td>
              <td>{user.Enable}</td>
              <td>{user.Email}</td>
              <td>{user.Role_Id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserEditor;
