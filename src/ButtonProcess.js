import React, { useState } from 'react'

export default function ButtonProcess() {
    const [ button,setButton]= useState('')
   
  return (
    <div>
      <input
      type='text'
      value={button}
      placeholder='Enter Your Name ubbu'
      onChange={(e)=>setButton(e.target.value)}/>
      {button}
    </div>
  )
}
