import React from "react";

function LoginPage({ loggedin, unread }) {
  function handleClick() {
    alert("You clicked me");
  }

  // Conditional block before return (optional)
  const Ubaid = loggedin ? "You are boring" : "Please login";

  return (
    <div>
      <h3>{Ubaid}</h3>

      <button onClick={handleClick}>Click Me</button>

      {/* Ternary Example */}
      {loggedin ? <h2>Welcome Ubaid</h2> : <h2>Login karle pehle</h2>}

      {/* && operator example */}
      {unread > 0 && <p>You are genius!</p>}
    </div>
  );
}

export default LoginPage;
