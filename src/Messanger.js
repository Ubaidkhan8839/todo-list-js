import React, { useContext } from 'react'
import UserContext from './UserContext';

export default function Messanger() {
    const {name, setName} = useContext(UserContext)
    const handleChange = () => {
        const newName = prompt("Enter new name:");
        if (newName) 
          setName(newName);
        
      };
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={handleChange}> Change Name </button>
    </div>
  )
}
