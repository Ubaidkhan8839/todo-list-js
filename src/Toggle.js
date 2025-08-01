import React, { useState } from "react";


function Toggle () {
    const [ show, setShow] = useState (true)
    const [ name , setName] = useState("")
    const [passwrd, setPasswrd] =useState('')
    const [showpass,setShowPass] =useState(false)
    return (

<div>
   
        <input 
        type="text"
        value={name}
        placeholder="Enter Your name"
        onChange={(e)=>setName(e.target.value)}/>
        <button disabled={name.trim() ===""}> Submit</button>
        <br/>
        <input
        type={showpass ? "text" :"password"}
        placeholder="Enter Your Password"
        value={passwrd}
        onChange={(e)=>setPasswrd(e.target.value)}/>
        <button onClick={()=>setShowPass(!showpass)}>{ showpass? "hide": "show"}</button>

   
    <button onClick={()=>setShow(!show)}>{ show ? "Hide Msg" :"Show Msg"}
    </button>
    {show && <p>you are awsome</p> }
</div>

    )
}



export default Toggle