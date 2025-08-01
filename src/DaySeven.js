import React from 'react'

export default function DaySeven() {
    const students = [{id:"1", name:'ubaid',mark:'400'},{id:"2", name:'sana',mark:'600'},{id:"3", name:'anjum',mark:'500'}]
    
  return (
    <div>
      <ul>
        {students.map((student)=>(<li key={student.id}>{student.name}-<strong>{student.mark}-{student.mark >= 500 ? "pass✅" :"fail❌"}</strong></li>))}
      </ul>
    </div>
  )
}
