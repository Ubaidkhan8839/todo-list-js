import React, { useState } from 'react'

export default function DaySevenDynamic() {
    const [newname,setNewName]=useState('')
    const [newnames,setNewNames]=useState([])
    function handleadd (){
        if(newname.trim()!==""){setNewNames([...newnames,newname]);
            setNewName('');
        }
    }
   
  return (
    <div>
      <input
      type='text'
      value={newname}
      onChange={(e)=>setNewName(e.target.value)}
      placeholder='enter the item'/>
      <button onClick={handleadd}>add</button>
      <ul>{newnames.map((named, index)=>(<li key={index}>{named}</li>))}</ul>
    </div>
  )
}
