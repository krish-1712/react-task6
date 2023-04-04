import React from "react";
import { useParams } from "react-router-dom";
import { Appstate } from "../Context/AppProvider";
import BaseApp from "../Core/Base";


 export function UserDetails(){

    const{user}=Appstate();
    
    const{id}=useParams();
    const person =user[id];

    return(
        <BaseApp
        title={"User Details"}>
            <div className="user-content">
          
                <div  className="user-card">
                    <h1>{person.Name}</h1>
                    <p>Age         :   {person.Age}</p>
                    <p>Email      :   {person.Email}</p>
                    <p>Course :   {person.Course}</p>
                    <p>Hobbies    :   {person.Hobbies}</p>
                    
                 </div>
                 </div>
           
        </BaseApp>
    )

 }