import React from 'react'

export default function DaySix() {
    const fruits = [ 'banana', 'mango','lichi','papaya']
const users =[{id :'1',name: "ubaid", email:"uk91575@gmail.com"},{id :'2',name: "anjum", email:"anjum@gmail.com"},{id :'3',name: "sana", email:"sana@gmail.com"}]
  return (
    <div>
        <ul>
        {fruits.map((fruit, index)=>(<li key={index}>{fruit}</li>))}


        </ul>
        <br/>
        <ul>
            {users.map((user )=>(<li key={user.id}><strong>{user.name}</strong>-{user.email}</li>))}
        </ul>
    </div>
  )
}
