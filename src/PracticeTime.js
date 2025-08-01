import React, { useState } from 'react'

export default function PracticeTime() {
    const [age, setAge]= useState('')
    const [ roll ,setRoll] = useState('')
    const [common, setCommon]=useState([])
    const [editit, setEditIt]= useState(null)
    function handlesubmit (){
        
        if(age.trim()!==""||roll.trim()!=='')
        {if(editit!==null){
            const updatedDataTable = common.map((u)=>u.id===editit?{...u, name:age ,Roll:roll}:u)
            setCommon(updatedDataTable)
            setEditIt(null)
        }else {  const Newdata = {id:Date.now(), name:age ,Roll:roll};
            setCommon([...common,Newdata])}
        setAge('')
        setRoll('')}
         
        }
    
    function DeleteData (id){
        const Deleteuser = common.filter((u)=>u.id!==id)
        setCommon(Deleteuser)

    } 
    function EditData (id){
       const EditDatatable = common.find((u)=>u.id===id)
       if(EditDatatable)
       {
        setAge(EditDatatable.name)
        setRoll(EditDatatable.Roll)
        setEditIt(EditDatatable.id)
       }
    
        
    }
  return (
    <div>
      <input
      value={age}
      type='text'
      onChange={(e)=>setAge(e.target.value)}
      placeholder='Enter Your Age'/>
       <input
         type='text'
      value={roll}
    
      onChange={(e)=>setRoll(e.target.value)}
      placeholder='Enter Your Roll No'/>
              <button onClick={handlesubmit}>{editit!==(null)?"edit button":"add  Data"}</button>

      <ul>{common.map((u)=>(<li key={u.id}>{u.name}-{u.Roll}

<button onClick={()=>DeleteData(u.id)}>Delete</button>
<button onClick={()=>EditData(u.id)}>Edit</button>

      </li>))}</ul>
     
    </div>
  )
}
