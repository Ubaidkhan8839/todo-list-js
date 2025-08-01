import React, {  useState } from 'react'

export default function OneMore() {
    const [ ubaid, setUbaid]= useState('')
    // const[newubaid, setNewUbaid] = useState([])
    const [newemail, setNewEmail] = useState('')
    // const [newemails, setNewEmails]= useState([])
    const [city,setCity] = useState('')
    const [newcity,setNewCity] = useState([])
    const [foredit ,setForEdit] = useState(null)

    function handleAddList (){
        if(ubaid.trim()!==''||newemail.trim()!==''||city.trim()!==''){
            if(foredit!==null){
                const UpdaterList = newcity.map((u)=>u.id===foredit?{...u,name : ubaid, Email: newemail, City:city}:u)
                setNewCity(UpdaterList)
                setForEdit(null);
            }else {
           const newUser = { id: Date.now(),name:ubaid, Email:newemail, City:city};
            setNewCity([...newcity,newUser])}
            setUbaid('')
            setNewEmail('')
            setCity('')
        }
    }
    function handleDelete (id){
        const updateNames = newcity.filter((u)=>u.id!==id)
        setNewCity(updateNames)
    }
    function handleEdit (id){
        const EditUsers = newcity.find((u)=>u.id===id)
        if(EditUsers){
            setUbaid(EditUsers.name)
            setNewEmail(EditUsers.Email)
                setCity(EditUsers.City)
                setForEdit(EditUsers.id)
            
        }
       
    }

  return (
    <div>
      <input
      type='text'
      value={ubaid}
      onChange={(e)=>setUbaid(e.target.value)}
      placeholder='Enter the List'/>
      <input
      type='email'
      value={newemail}
      onChange={(e)=>setNewEmail(e.target.value)}
      placeholder='Enter the email'/>
       <input
      type='text'
      value={city}
      onChange={(e)=>setCity(e.target.value)}
      placeholder='Enter the city'/>
      <button onClick={handleAddList}>{foredit!==null?"Edit List":"add list"}</button>
      {newcity.map((u)=>(<li key={u.id}>{u.name}-<strong>{u.Email}</strong>-{u.City}
      <button onClick={()=>handleDelete(u.id)}>Delete</button>
      <button onClick={()=>handleEdit(u.id)}>Edit</button></li>))}

    </div>
  )
}
