import React, { useState } from 'react'

export default function OneMoreTime() {
    const [ shikho , setShikho] = useState('')
    const [ emailed, setEmailed] = useState('')
    const [user, setUser] = useState([])
    const [editId, setEditId] = useState(null);
    

    function handlesubmit (){
        if(shikho.trim()!==''||emailed.trim()!=='')
           { if(editId!==null) {
            const updateduser = user.map((addUser)=>addUser.id===editId ?{...addUser,name:shikho, Email:emailed}:addUser);
            setUser(updateduser)
            setEditId(null)
           }else {
         const updateddata = {id: Date.now() ,name:shikho, Email:emailed}
        setUser([...user,updateddata])}
    setShikho('')
setEmailed('')}
           
    }
    function handleDelete(id){
        const updateUser = user.filter((addUser)=>addUser.id!==id);
        setUser(updateUser)
    }
    function handleEdit(id){
        const EditUser =user.find((addUser)=>addUser.id===id);
        if(EditUser){
            setShikho(EditUser.name)
            setEmailed(EditUser.Email)
            setEditId(EditUser.id)
        }
    }
  return (
    <div>
      <input type='text'
      value={shikho}
      onChange={(e)=>setShikho(e.target.value)}
      placeholder='Enter Name'/>
       <input type='email'
      value={emailed}
      onChange={(e)=>setEmailed(e.target.value)}
      placeholder='Enter Email'/>
      <button onClick={handlesubmit}>{editId!==null? 'Updateperson' : 'addperson'}</button>
      <ul>{user.map((addUser)=>(<li key={addUser.id}>{addUser.name}-{addUser.Email}{''}
        <button onClick={()=>handleDelete(addUser.id)}>Delete it</button>
        <button onClick={()=>handleEdit(addUser.id)}>Edit</button>
      </li>))}</ul>
    </div>
  )
}
