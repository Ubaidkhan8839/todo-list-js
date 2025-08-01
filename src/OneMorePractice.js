import React, { useEffect, useState } from 'react'

export default function OneMorePractice() {
  const [sana, setSana] = useState('')
  const [ubaid, setUbaid] = useState('')
  const [anjum, setAnjum] = useState('')
  const [superuser, setSuperUser] = useState([])
  const [edited, setEdited] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortField, setSortField] = useState(null)
  const [sortOrder, setSortOrder] = useState('asc')

  function handlesort (field){
    if(sortField===field) {
        setSortOrder(sortOrder==="asc"?"dsc":"asc")

    }else{
setSortField(field)   
setSortOrder('asc') }
   
  }
  const sortedUsers = [...superuser].sort((a, b) => {
    if (!sortField) return 0
    const valA = a[sortField].toLowerCase() ||''
    const valB = b[sortField].toLowerCase()||''
    if (valA < valB) return sortOrder === 'asc' ? -1 : 1
    if (valA > valB) return sortOrder === 'asc' ? 1 : -1
    return 0
  })

  useEffect(() => {
    const localuser = localStorage.getItem("superuserList")
    if (localuser) {
      setSuperUser(JSON.parse(localuser))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("superuserList", JSON.stringify(superuser))
  }, [superuser])

  function handleAdd() {
    if (sana.trim() !== '' || ubaid.trim() !== '' || anjum.trim() !== '') {
      if (edited !== null) {
        const updatedSuperUser = superuser.map((u) =>
          u.id === edited ? { ...u, Name: sana, Country: ubaid, State: anjum } : u
        )
        setSuperUser(updatedSuperUser)
        setEdited(null)
      } else {
        const AddSuperUser = { id: Date.now(), Name: sana, Country: ubaid, State: anjum }
        setSuperUser([...superuser, AddSuperUser])
      }
      setSana('')
      setUbaid('')
      setAnjum('')
    }
  }

  function EditSuperUser(id) {
    const EditSuperTable = superuser.find((u) => u.id === id)
    if (EditSuperTable) {
      setSana(EditSuperTable.Name)
      setUbaid(EditSuperTable.Country)
      setAnjum(EditSuperTable.State)
      setEdited(EditSuperTable.id)
    }
  }

  function DeleteSuperUser(id) {
    const DeletSuper = superuser.filter((u) => u.id !== id)
    setSuperUser(DeletSuper)
  }

  const ForSearching = sortedUsers.filter((u) =>
    (u.Name + u.Country + u.State).toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <input type='text' value={sana} onChange={(e) => setSana(e.target.value)} placeholder='Name' />
      <input type='text' value={ubaid} onChange={(e) => setUbaid(e.target.value)} placeholder='Country' />
      <input type='text' value={anjum} onChange={(e) => setAnjum(e.target.value)} placeholder='State' />
      <button onClick={handleAdd} disabled={!sana.trim() && !ubaid.trim() && !anjum.trim()}>{edited !== null ? "Update" : "Add"}</button>
      <br />
      <input
        type="text"
        placeholder="Search user..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginTop: '20px', width: '50%', padding: '5px' }}
      />
      <table border={1} cellPadding={8} style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th onClick={()=>handlesort('Name')}>Name{sortField=== 'Name' && (sortOrder === 'asc'? '🔼' : '🔽')}</th>
            <th onClick={()=>handlesort('Country')}>Country{sortField=== 'Country' && (sortOrder === 'asc'? '🔼' : '🔽')}</th>
            <th onClick={()=>handlesort('State')}>State{sortField=== 'State' && (sortOrder === 'asc'? '🔼' : '🔽')}</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {ForSearching.map((u) => (
            <tr key={u.id}>
              <td>{u.Name}</td>
              <td>{u.Country}</td>
              <td>{u.State}</td>
              <td>
                <button onClick={() => EditSuperUser(u.id)}>Edit</button>
                <button onClick={() => DeleteSuperUser(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
          {ForSearching.length === 0 && (
            <tr>
              <td colSpan={4} style={{ textAlign: 'center' }}>No result found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
