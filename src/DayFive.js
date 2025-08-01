import React, { useState } from 'react'

export default function DayFive() {
    const [value, setValue]= useState('')
    const [email, setEmail] = useState('')
    function handlesubmit (e){
        e.preventDefault();
        alert(`welcome ubaid,${value},${email}`)
        setEmail([])
        setValue([])
    }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
        type='text'
        value={value}
       
        onChange={(e)=>setValue(e.target.value)}
        placeholder='Enter the Value'/>
         <input
        type='text'
        value={email}
       
        onChange={(e)=>setEmail(e.target.value)}
        placeholder='Enter the Value'/>
        <button type='submit'> Submit</button>
        
      </form>
      <hr />
      <h3>Live Preview</h3>
      <p><strong>Name:</strong> {value}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  )
}
