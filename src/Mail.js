import React, { useState } from "react";


function Mail () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email) ;
    const isFormvalid = name.trim() !== "" && isEmailValid
    function HandleSubmit (e){
        e.preventDefault();
        alert(`Welcome ${name} !your mail ${email}`)
        setName("")
        setEmail("")
    }
    return(
        <div>
            <form onSubmit={HandleSubmit}>
                <input
                type="text"
                value={name}
                placeholder="Enter Your Name"
                onChange={(e)=>setName(e.target.value)}/>
                  <input
                type="email"
                value={email}
                placeholder="Enter Your Gmail"
                onChange={(e)=>setEmail(e.target.value)}/>
                <button  disabled={!isFormvalid} type="submit">Submit</button>
            </form>
            {email.length > 0 && !isEmailValid && (<p>please enter valid emaik</p>)}

        </div>
    )
}
export default Mail