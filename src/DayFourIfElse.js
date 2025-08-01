import React from 'react'

export default function DayFourIfElse({sanaUllah}) {
    
  return (
    <div>
      <h3>Inbox</h3>
      {sanaUllah> 0 && <p>You have {sanaUllah} unread messages 📩</p>}
    </div>
  );
}
    