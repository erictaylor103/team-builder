import React, { useState } from 'react';
import './App.css';
import UserData from "./UserData";
import UserForm from './UserForm'





function App() {

  const[users, setUsers] = useState([

    {
      id: 1,
      name: "Robert",
      role: "Main Dog",
      email: "eric@weshoot.com"
    },

    {
      id: 2,
      name: "Aqua",
      role: "Barbie Girl",
      email: "barbie@weshoot.com"
    }

  ]);
  //console.log(notes);
  
  const addNewUser = user => {
    const newUser ={
      id: Date.now(),
      name: user.name,
      role: user.role,
      email: user.email
    }
    setUsers([...users, newUser])
  }


  return (
    <div className="App">
      <UserForm addNewUser={addNewUser}/>
      <UserData users={users} />
    </div>
  );
}

export default App;
