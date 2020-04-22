import React, { userState, useState } from 'react';

const UserForm = props => {
    
    const[user, setUser] = useState({
        name: '',
        role: '',
        email: ''
    });

    const handleChanges = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value,
            [e.target.role] : e.target.value,
            [e.target.email] : e.target.value            
        });
        console.log(e.target.value);
    };

    //My submit function for my button
    function submitForm(e){
        e.preventDefault();
        props.addNewUser(user);
        setUser({name: "", role: "", email: ""});
    }
    
    return(
        <form onSubmit={submitForm}>
            
            <label htmlFor="name">Name: </label>            
            <input 
                id="name"
                name="name"
                type="text"
                onChange={handleChanges}
                value={user.name}
                
                
            />
            <br/>
            <br/>
            <label htmlFor="role">Role: </label>
            <input 
                id="role"
                name="role"
                type="text"
                onChange={handleChanges}
                value={user.role}
            />
            <br/>
            <br/>
            <label htmlFor="email">Email: </label>
            <input 
                id="email"
                name="email"
                type="text"
                onChange={handleChanges}
                value={user.email}
                
            />

            <button type="submit">Add User</button>
            

        </form>
    )
}

export default UserForm;