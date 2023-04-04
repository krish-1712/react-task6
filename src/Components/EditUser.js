import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Appstate } from "../Context/AppProvider";
import BaseApp from "../Core/Base";

export const EditUser=()=>{
    
    const{user,setUser}=Appstate();

    const[Name,setName]=useState("")
    const[idx,setIdx]=useState("")
    const[Age,setAge]=useState("")
    const[Email,setEmail]=useState("")
    const[Course,setCourse]=useState("")
    const[Hobbies,setHobbies]=useState("")

    const {id}=useParams()
    const history=useNavigate();

    const selectedUser= user.find((per)=>per.id === id);
    
   
    useEffect(()=>{
        setIdx(selectedUser.id)
        setName(selectedUser.Name)
        setAge(selectedUser.Age)
        setEmail(selectedUser.Email)
        setCourse(selectedUser.Course)
        setHobbies(selectedUser.Hobbies)
    },[])


    const updateUser=async()=>{
        const editIndex=user.findIndex(per =>per.id === id)
      
        const editedData ={
            id : idx,
            Name,
            Age,
            Email,
            Course,
            Hobbies
        }


        try{
            const response =await fetch(`https://63770f6e81a568fc250b13c2.mockapi.io/users/${idx}`,{
                method:"PUT",
                body:JSON.stringify(editedData),
                headers:{
                    "Content-Type":"application/json",
                }
            })
            const data= await response.json();
            console.log(data)

            
        user[editIndex]=data
        setUser([...user]);
        history("/")

        }catch(error){
            console.log(error)
        }

  



    }

     return(
        <BaseApp
        title={"Edit the User Details"}>
         <div className="new">
                <input placeholder="Id" className="id" type="number"
                    value={idx}
                    onChange={(event)=>setIdx(event.target.value)}
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
                onClick={updateUser} className="Edit"
                >Edit</button>
         
        </div>
        </BaseApp>
     )
}