import React, { useState } from 'react';

export default function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleSubmit() {
    setIsLoggedIn(!isLoggedIn); // toggle kar raha hai
  }

  return (
    <div>
       {isLoggedIn ? "you are Logged In ✅" : "you are Logged Out ❌"}
      <button onClick={handleSubmit}>
        {isLoggedIn ? "Logged In ✅" : "Logged Out ❌"}
      </button>
    </div>
  );
}
