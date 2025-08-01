import React, { useState } from 'react';

function Relationship({ Sana }) {
  const [isMarried, setIsMarried] = useState(false);

  function toggleMarriage() {
    setIsMarried(!isMarried);
  }

  let message;
  if (isMarried) {
    message = '❤️ is your wife';
  } else {
    message = '💍  will be your future wife';
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={toggleMarriage}>
        {Sana ? "Make her future wife" : "Make her wife"}
      </button>
    </div>
  );
}

// <Relationship sana="Sana" />
export default Relationship;