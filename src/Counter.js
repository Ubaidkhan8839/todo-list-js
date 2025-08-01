import React, { useState } from 'react'

export default function Counter() {
    const [ name , setName] = useState('')
    const [ state , setState] = useState('')
    const [ user , setUser] = useState([])
    const [edit , setEdit]= useState(null)  

    const [ search, setSearch]= useState('')
function handleadd (){
    if(name.trim()!==''||state.trim()!==''){
        if(edit!==null){
            const UpgradeUser = user.map((u)=>u.id===edit?{...u,Name:name, State:state}:u)
            setUser(UpgradeUser)
            setEdit(null)
        }
        else
    {
        const AddUser = {id:Date.now(),Name:name, State:state}
        setUser([...user,AddUser])}
        setName('')
        setState('')
    }
}
 const filterUser = user.filter((u)=>(u.Name+u.State).toLowerCase().includes(search.toLowerCase()))
function Handledelete (id) {
const deleteuser = user.filter((u)=>u.id!==id)
setUser(deleteuser)
}
 function handleEdit (id){
    const EditUser= user.find((u)=>u.id===id)
    if(EditUser){
        setName(EditUser.Name)
        setState(EditUser.State)
        setEdit(EditUser.id)
    }

 }
return (
    <div>
      <input type='text'
      value={name}
      onChange={(e)=>setName(e.target.value)}
      placeholder='Enter your Name'/>
      <input
      type='text'
      value={state}
      onChange={(e)=>setState(e.target.value)}
      placeholder='Enter The state'/>
     
      <button onClick={handleadd}>{edit!==null?'edit':'add'}</button>
      <br/>
      <input type=''
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      placeholder='Search'/>
      <ul>{filterUser.map((u)=>(<li key={u.id}>{u.Name}-{u.State}
        <button onClick={()=>handleEdit(u.id)}>edit</button>
        <button onClick={()=>Handledelete(u.id)}>Delete</button>
        {filterUser.length=== 0 &&(<li>No result found</li>)}
      </li>))}
     </ul>
    </div>
  )
}
