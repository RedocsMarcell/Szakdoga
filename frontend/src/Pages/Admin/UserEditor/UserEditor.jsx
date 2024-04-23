import React,{useState, useEffect} from 'react'
import axios from "axios"
import "./UserEditor.css"


const UserEditor = () => {
  const [users,setUsers] = useState([])
  const [userIdToDeactivate, setUserIdToDeactivate] = useState(-1);
  const [userIdToactivate, setUserIdToactivate] = useState(-1);
  const [newusername, SetNewusername] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [newclassid, setNewclassid] = useState(-1);
  const [newenable, setNewenable] = useState(-1);
  const [newemail, setNewEmail] = useState("");
  const [newroleid, setnewroleid] = useState("");

  const [useridpasswordchange, setNewuseridpasswordchange] = useState(-1)
  const [newchangepassword, setNewchangepassword] = useState("")

  const [useridclasschange, setNewuseridclasschange] = useState(-1)
  const [newchangeclass, setNewchangeclass] = useState("")

  const [useridemailchange, setNewuseridemailchange] = useState(-1)
  const [newchangeemail, setNewchangeemail] = useState("")
  


  const fetchUsers = async () => {
    try {
      const response = await axios.post('http://localhost:8081/adminusers', {  });

      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    

    fetchUsers();
  }, []);

const handleDeactivation = async () => {

  try {
    await axios.post('http://localhost:8081/adminuserdeactivation', {
      id: userIdToDeactivate,
    });
   
    fetchUsers();
  } catch (error) {
    console.error(error);
  }
}

const handleActivation = async () => {

  try {
    await axios.post('http://localhost:8081/adminuseractivation', {
      id: userIdToactivate,
    });
   
    fetchUsers();
  } catch (error) {
    console.error(error);
  }
}

const handleNewUser = async () => {

  try {
    await axios.post('http://localhost:8081/newuser', {
      username: newusername,
      password: newpassword,
      classid: newclassid,
      enable: newenable,
      email: newemail,
      roleid: newroleid

    });
    
    fetchUsers();
  } catch (error) {
    console.error(error);
  }
}

const handleChangepassword = async () => {
  
  try {
    await axios.post('http://localhost:8081/changepassword', {
      userid: useridpasswordchange,
      password: newchangepassword,
      

    });
    
    fetchUsers();
  } catch (error) {
    console.error(error);
  }
}

const handleChangeclass = async () => {
  
  try {
    await axios.post('http://localhost:8081/changeclass', {
      userid: useridclasschange,
      class: newchangeclass,
      

    });
    
    fetchUsers();
  } catch (error) {
    console.error(error);
  }
}

const handleChangeemail = async () => {
  
  try {

    await axios.post('http://localhost:8081/changeemail', {
      userid: useridemailchange,
      email: newchangeemail,
      

    });
    
    fetchUsers();
  } catch (error) {
    console.error(error);
  }
}

const handleDeactivationInputChange = (e) => {
  setUserIdToDeactivate(e.target.value);
};

const handleActivationInputChange = (e) => {
  setUserIdToactivate(e.target.value);
};

const handleusernameInputChange = (e) => {
  SetNewusername(e.target.value);
};

const handlepasswordInputChange = (e) => {
  setNewPassword(e.target.value);
};

const handleclassidInputChange = (e) => {
  setNewclassid(e.target.value);
};

const handleenableInputChange = (e) => {
  setNewenable(e.target.value);
};

const handleemailInputChange = (e) => {
  setNewEmail(e.target.value);
};

const handleroleidInputChange = (e) => {
  setnewroleid(e.target.value);
};

const handlepassworduserid= (e) => {
  setNewuseridpasswordchange(e.target.value);
};

const handlepasswordchange = (e) => {
  setNewchangepassword(e.target.value);
};

const handleclassuserid= (e) => {
  setNewuseridclasschange(e.target.value);
};

const handleclasschange = (e) => {
  setNewchangeclass(e.target.value);
};

const handleemailuserid= (e) => {
  setNewuseridemailchange(e.target.value);
};

const handleemailchange = (e) => {
  setNewchangeemail(e.target.value);
};



  return (
    <div>
      <div className="-usereditor-table-container"> 
      <div className="scrollable-table">
        <table className="usereditor-table">
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
        <br/>
        <div> Fiók deaktiválása: </div>
        <div> user id megadása a deaktiváláshoz: </div>
        <input type="text"  onChange={handleDeactivationInputChange}/>
        <button onClick={handleDeactivation}>Beállítás</button> 
        <br/>
        <br/>
        <div> Fiók aktiválása: </div>
        <div> user id megadása az aktiváláshoz: </div>
        <input type="text"  onChange={handleActivationInputChange}/>
        <button onClick={handleActivation}>Beállítás</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <div> Új fiók létrehozása:</div>
        <div> Username: </div>
        <input type="text"  onChange={handleusernameInputChange}/>
        <div> Password: </div>
        <input type="text"  onChange={handlepasswordInputChange}/>
        <div> Class_ID: </div>
        <input type="text"  onChange={handleclassidInputChange}/>
        <div>Enable:</div>
        <input type="text"  onChange={handleenableInputChange}/>
        <div>Email:</div>
        <input type="text"  onChange={handleemailInputChange}/>
        <div>Role ID:</div>
        <input type="text"  onChange={handleroleidInputChange}/>
        <button onClick={handleNewUser}>Létrehozás</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <div> Password változtatása </div>
        <div> user id megadása a Password módosításához: </div>
        <input type="text"  onChange={handlepassworduserid}/>
        <div> Új jelszó </div>
        <input type="text"  onChange={handlepasswordchange}/>
        <button onClick={handleChangepassword}>Beállítás</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <div> Class_id változtatása </div>
        <div> user id megadása a Class_id módosításához: </div>
        <input type="text"  onChange={handleclassuserid}/>
        <div> Új Class_id  </div>
        <input type="text"  onChange={handleclasschange}/>
        <button onClick={handleChangeclass}>Beállítás</button> 
        <br/>
        <br/> 
        <br/>
        <br/>
        <div> Email változtatása </div>
        <div> user id megadása a Email módosításához: </div>
        <input type="text"  onChange={handleemailuserid}/>
        <div> Új Email </div>
        <input type="text"  onChange={handleemailchange}/>
        <button onClick={handleChangeemail}>Beállítás</button> 


      </div>
    </div>
  );
};

export default UserEditor;
