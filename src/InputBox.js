import React from "react";
function InputBox ({name,setName}){
    return(
        <div> <input
        type="text"
        placeholder="enter your name"
        value={name}
        onChange={(e)=>setName(e.target.value)}/></div>
    )
}

export default InputBox ;


