import React, { useState } from 'react'

export default function DayThree() {
    const [count , setCount] = useState (0)
    const [like, setLike] = useState(0)
    function handleclear (){
        alert('you are fool')
    }
  return (
    <div>
        <h2>counter:{count}</h2>
      <button onClick={()=>setCount(count+1)}>+count</button>
      <button onClick={()=>setCount(count -1)}>-count</button>
      <button onClick={()=>setCount(0)}>reset</button>
      <button onClick={handleclear}>Click me</button>

      <h3>like :{like}</h3>

      <button onClick={()=>setLike(like+1)}>+like</button>
      <button onClick={()=>setLike(like -1)}>-Like</button>
      <button onClick={()=>setLike(0)}>reset</button>
    </div>
  )
}
