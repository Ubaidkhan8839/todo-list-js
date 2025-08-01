import React from "react";



function Usercard ({name,email,verified}){
    return(
        <div>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{verified ? ("Verified"):("Not Verified users")}
            </p>
        </div>
    )
}
export default Usercard ;