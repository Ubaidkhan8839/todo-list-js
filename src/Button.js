import React from 'react'

export default function Button({label,disabled,onClick}) {
  return (
    <div>
      <button disabled={disabled} onClick={onClick}    style={{
        padding: '8px 16px',
        backgroundColor: '#1976d2',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '4px',
        marginTop: '10px'
      }}>{label}</button>
    </div>
  )
}
