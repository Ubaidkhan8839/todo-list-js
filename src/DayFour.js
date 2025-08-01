import React from 'react'

export default function DayFour(props) {
  const Ubaid = props.Sana
  function handleClick() {
    alert( "you are pool");
}



  return (
    <div>
      { Ubaid ? "Sana is Your wife" : "Sana Is your Future Wife"}
     

      <button onClick={handleClick}>Click Me</button>
    


    </div>
  )
} 