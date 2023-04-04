import React from "react";
import { useNavigate } from "react-router-dom";

export  function Nopage(){

    const history=useNavigate();
    return(
        <div>
            <h1>Hi you entered the Wrong Page 404 Error</h1>
            <button
            onClick={()=>history("/")} className="btn4">
                Student Details
            </button>
            <button 
            onClick={()=>history("/teacher")} className="btn5">
                Teacher Details
            </button>
        </div>
    )
}