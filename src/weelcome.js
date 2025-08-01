import React, { useEffect, useState } from "react";

function Weelcome (){
    const [newName, setNewName] =useState('')
    const [newemail, setNewEmail] = useState('')
    const [users, setUsers] = useState([]); // ✅ Missing state
    const [editingId, setEditingId] = useState(null); // for edit mode
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(newemail) ;
    const isFormvalid = newName.trim() !== "" && isEmailValid


     function handleSubmitUser (){
        if(newName.trim()=== '' || newemail.trim()==='') return;
        if (editingId !== null) {
            const Updateuser = users.map((user)=>user.id === editingId ? {...user, name : newName, email:newemail} : user);
            setUsers(Updateuser)
            setEditingId(null)
        } else {
            const newUser = {
                id: Date.now(),
                name: newName,
                email: newemail
            }
            setUsers([...users, newUser])
           
        }
        setNewName("")
        setNewEmail("")
        
     }
     const handleDelete = (id) =>{
        const filtered = users.filter((user)=>user.id !==id);
        setUsers(filtered)


     }
     const handleEditUser = (user)=> {
        setNewName(user.name);
        setNewEmail(user.email);
        setEditingId(user.id);
     }
     useEffect (()=>{
        const savedNamed = localStorage.getItem("username");
        if(savedNamed) {
            setNewName(savedNamed);
        }

     },[]);
     useEffect (()=>{
        localStorage.setItem("username" ,newName)
     },[newName])

    return (
        <div style={{ padding: "20px" }}>
            <input type="text"
            value={newName}
            placeholder="Enter Your Name"
            onChange={(e)=>setNewName(e.target.value)}
            style={{ marginRight: "10px" }}
            
            />
            
             <input type="email"
            value={newemail}
            placeholder="Enter Your Email"
            onChange={(e)=>setNewEmail(e.target.value)}
            style={{ marginRight: "10px" }}
            />
                        {newemail.length > 0 && !isEmailValid && (<p>please enter valid emaik</p>)}

            <button  disabled={!isFormvalid} onClick={handleSubmitUser}>{editingId !== null ?" Update User" : "Add user"}</button>
            <table  border="1"
        cellPadding="20"
        style={{ marginRight: "10px" , marginTop: "10px"}}>
                <thead>
                    <tr>
                        <th>
                            name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.length=== 0 ?( <tr>
              <td colSpan="3">No user found</td>
            </tr>):(users.map((user)=> <tr key={user.id}
             style={{
                backgroundColor: editingId === user.id ? "#ffffcc" : "white", // Light yellow
              }}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><button onClick={()=>handleDelete(user.id)}>Delete</button></td>
                <td><button onClick={()=>handleEditUser(user)}>edits</button></td>
            </tr>))}

                </tbody>
            </table>
        </div>
    )
}
export default Weelcome