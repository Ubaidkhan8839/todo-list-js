import React from 'react'

export default function Input({label,value,onChange,placeholder}) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <label  style={{ fontWeight: 'bold' }}>{label}</label>
      <input type='text' value={value} onChange={onChange} placeholder={placeholder}  style={{ padding: '4px', width: '100%' }}/>
     
    </div>
  )
}
