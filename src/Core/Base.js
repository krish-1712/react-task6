import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";

 export const  Appcontext= createContext()





export default function BaseApp({ title, styles, children }) {
 
    const history = useNavigate();
    return (
        <div>
            <div>
                <div className="nav-styles">
                    <span>
                        <button
                            className="nav-buttons"
                            onClick={() => history("/add/user")}
                        > Add student</button>
                    </span>
                    <span>
                        <button
                            className="nav-buttons"
                            onClick={() => history("/teacher/user")}
                        > Add Teacher </button>
                    </span>
                    <span>
                        <button
                            className="nav-buttons"
                            onClick={() => history("/")}
                        > Student Details</button>
                    </span>
                    <span>
                        <button
                            className="nav-buttons"
                            onClick={() => history("/teacher")}
                        > Teacher Details</button>
                    </span>
                </div>
                <div className="title">{title}</div>
            </div>
            <div className="childred">
              
                    {children}
                   
             
            </div>

        </div>
    )
} 