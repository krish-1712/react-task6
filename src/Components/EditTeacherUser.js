import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Apps } from "../Context/AppProd";
import BaseApp from "../Core/Base";

export  const EditTeacherUser=()=>{
    const{teacher,setTeacher}=Apps();
    
    const[Name,setName]=useState("")
    const[idx,setIdx]=useState("")
    const[Age,setAge]=useState("")
    const[Email,setEmail]=useState("")
    const[Subject,setSubject]=useState("")
    const[Qualification,setQualification]=useState("")

    const {id}=useParams()
    const history=useNavigate();

    const selectedUser= teacher.find((per)=>per.id === id);
    
   
    useEffect(()=>{
        setIdx(selectedUser.id)
        setName(selectedUser.Name)
        setAge(selectedUser.Age)
        setEmail(selectedUser.Email)
        setSubject(selectedUser.Subject)
        setQualification(selectedUser.Qualification)
    },[])


    const updateUser=async()=>{

        const editIndex=teacher.findIndex(per =>per.id === id)
      
        const editedData ={
            id : idx,
            Name,
            Age,
            Email,
            Subject,
            Qualification
        }

        try{
            const response =await fetch(`https://63770f6e81a568fc250b13c2.mockapi.io/teacher/${idx}`,{
                method:"PUT",
                body:JSON.stringify(editedData),
                headers:{
                    "Content-Type":"application/json",
                }
            })
            const data= await response.json();
            console.log(data)

            teacher[editIndex]=data
            setTeacher([...teacher]);
            history("/teacher")
    

        }catch(error){
            console.log(error)
        }

      


    }

     return(
        <BaseApp
        title={"Edit the Teacher Details"}>
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

                <input placeholder="Subject" className="subject" type="text"
                 value={Subject}
                 onChange={(event)=>setSubject(event.target.value)}
                /><br></br>

                <input placeholder="Qualification" className="qualification" type="text"
                 value={Qualification}
                 onChange={(event)=>setQualification(event.target.value)}
                /><br></br>

                <button
                onClick={updateUser} className="Edit"
                >Edit</button>
         
        </div>
        </BaseApp>
     )
}