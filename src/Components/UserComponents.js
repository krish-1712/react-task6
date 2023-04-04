import React from "react";
import { useNavigate } from "react-router-dom";
import { Appstate } from "../Context/AppProvider";
import BaseApp from "../Core/Base";


export default function UserComponents(){
   
    const{user,setUser}=Appstate();

    const history=useNavigate();
    

    
    const deleteUser=async (idx)=>{
        try{

            const response= await fetch(`https://63770f6e81a568fc250b13c2.mockapi.io/users/${idx}`,{
                method:"Delete"
            })

            const data = await response.json()
            console.log("after the data",data);


            const alterList =user.filter((per)=> per.id!== idx)
            console.log(alterList)
            setUser(alterList);
            if(!data){
                console.log("Could not delete data");
            }
        }
        catch(error){
            console.log(error)
        }
      
    }

        


    return(
     
        <BaseApp  
        title="User Details">
        <div className="user-content">

            {
            user &&(
            
            user?.map((person,idx)=>(   
                <div key={idx} className="user-card">
                    <h1>{person.Name}</h1>
                    <p>Age         :   {person.Age}</p>
                    <p>Email      :   {person.Email}</p>
                    <p>Course :   {person.Course}</p>
                    <p>Hobbies    :   {person.Hobbies}</p>
                    
                    <div className="btn-group">
                        <button className="btn edit-btn"
                        onClick={()=>history(`/edit/${person.id}`)}
                        >Edit</button>
                        <button className="btn view-btn"
                        onClick={()=>history(`/user/${idx}`)}
                        >View</button>
                        <button 
                        className="btn del-btn"
                        onClick={()=>deleteUser(person.id)}
                        >Delete</button>
                    </div>
                
                </div>
            )))}
          
        </div>
        </BaseApp>
    )
}
 