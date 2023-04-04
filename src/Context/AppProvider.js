import React, { createContext, useContext, useEffect, useState } from "react";


const AppContext= createContext()


const AppProvider=({children})=>{
    const[user,setUser]=useState([]);

    useEffect(()=>{
        const getUserDetails=async()=>{
            try{

                const response= await fetch("https://63770f6e81a568fc250b13c2.mockapi.io/users",{
                    method:"GET"
                });
                const data = await response.json()
                console.log(data);
                setUser(data)
                if(!data){
                    console.log("unable to fetch the data") 
                }
            }catch(error){
                console.log(error)
            }
        }
        getUserDetails();
    },[])



    return(
        <AppContext.Provider
        value={{ user,setUser} }
        >
            {children}
        </AppContext.Provider>

      
    )
}

export const Appstate=()=>{
    return useContext(AppContext)
}

export default AppProvider