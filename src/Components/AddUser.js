import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Appstate } from "../Context/AppProvider";
import BaseApp from "../Core/Base";


export function AddUser(){
    const{user,setUser}=Appstate();
    const history=useNavigate();

    const[Name,setName]=useState("")
    const[id,setId]=useState("")
    const[Age,setAge]=useState("")
    const[Email,setEmail]=useState("")
    const[Course,setCourse]=useState("")
    const[Hobbies,setHobbies]=useState("")

    const addNewUser=async()=>{
        
        const newUSer={
            id,
            Name,
            Age,
            Email,
            Course,
            Hobbies
        }

        try{
            const response =await fetch(`https://63770f6e81a568fc250b13c2.mockapi.io/users`,{
                method:"POST",
                body:JSON.stringify(newUSer),
                headers:{
                    "Content-Type":"application/json",
                }
            })
            const data= await response.json();
            console.log(data);

            setUser([...user, data])
            history("/")

        }catch(error){
            console.log("error")
        }




    }
  


    return(
        <BaseApp
        title={"Add a New User"}>
         <div className="new">
                <input placeholder="Id" className="id" type="number"
                    value={id}
                    onChange={(event)=>setId(event.target.value)}
                /> <br></br>

                <input placeholder="Name" className="name" type="text"
                    value={Name}
                    onChange={(event)=>setName(event.target.value)}
                /> <br></br>

                <input placeholder="Age" className="age" type="number"
                 value={Age}
                 onChange={(event)=>setAge(event.target.value)}
                /><br></br>

                <input placeholder="Email" className="email" type="text"
                 value={Email}  
                 onChange={(event)=>setEmail(event.target.value)}
                /><br></br>

                <input placeholder="Course" className="course" type="text"
                 value={Course}
                 onChange={(event)=>setCourse(event.target.value)}
                /><br></br>

                <input placeholder="Hobbies" className="hobbies" type="text"
                 value={Hobbies}
                 onChange={(event)=>setHobbies(event.target.value)}
                /><br></br>

                <button
                onClick={addNewUser} className="add"
                >Add</button>
         
        </div>
        <footer className="write">
                    Contact us
                    <div>Email : teacher@gmail.com</div>
                    <div>Phone : 86*****743</div>
                </footer>
        </BaseApp>
        
       
    )
}
