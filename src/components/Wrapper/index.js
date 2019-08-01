import React from "react";
import "./style.css";

function Wrapper(propts){
    return(
        <div className="wrapper">{propts.children}</div>
    )
}



export default Wrapper;