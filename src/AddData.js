import React, { useState } from "react";

function AddData() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([
    { id: 1, name: 'Ubaid', email: 'ubaid@123' }
  ]);
  const [editingId, setEditingId] = useState(null); // 🆕 track which user is being edited

  const handleAddOrUpdateUser = () => {
    if (name.trim() === "" || email.trim() === "") return;

    if (editingId) {
      // ✅ Update user
      const updatedUsers = users.map((user) =>
        user.id === editingId ? { ...user, name, email } : user
      );
      setUsers(updatedUsers);
      setEditingId(null); // reset
    } else {
      // ✅ Add user
      const newUser = {
        id: Date.now(),
        name: name,
        email: email
      };
      setUsers([...users, newUser]);
    }

    // Clear inputs
    setName('');
    setEmail('');
  };

  const handleEditUser = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditingId(user.id);
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    if (editingId === id) {
      setEditingId(null); // Reset editing if deleted user was being edited
      setName('');
      setEmail('');
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        value={name}
        placeholder="Enter your Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        value={email}
        placeholder="Enter your Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleAddOrUpdateUser}>
        {editingId ? "✏️ Update User" : "➕ Add User"}
      </button>

      <table
        border="1"
        cellPadding="10"
        style={{ marginTop: "20px", borderCollapse: "collapse", width: "100%" }}
      >
        <thead style={{ backgroundColor: "#f2f2f2" }}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>No users found</td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleEditUser(user)}>✏️ Edit</button>
                  <button onClick={() => handleDeleteUser(user.id)} style={{ marginLeft: "10px", color: "red" }}>
                    ❌ Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AddData;
