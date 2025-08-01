import React, { useState } from "react";

 function Like () {
    const [ like, setLike] = useState(0)
    return(
        <div> 
            Like : {like}
            <button onClick={()=>setLike(like +1)}> like +1</button>
            <button onClick={()=>setLike(like -1)}>like -1</button>
            <button onClick={()=>setLike(0)}>Reset</button>
        </div>
    )
}
export default Like ;
