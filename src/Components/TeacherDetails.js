import React from "react";
import { useParams } from "react-router-dom";
import { Apps } from "../Context/AppProd";
import BaseApp from "../Core/Base";


 export function TeacherDetails(){

    const{teacher}=Apps();
    
    const{id}=useParams();
    const person =teacher[id];
    return(
        <BaseApp
        title={"Teacher Details"}>
            <div className="teacher-content">
          
                <div  className="teacher-card">
                    <h1>{person?.Name}</h1>
                    <p>Age         :   {person?.Age}</p>
                    <p>Email      :   {person?.Email}</p>
                    <p>Subject :   {person?.Subject}</p>
                    <p>Qualification    :   {person?.Qualification}</p>
                    
                 </div>
                 </div>
           
        </BaseApp>
    )

 }