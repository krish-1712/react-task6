import React, { createContext, useContext, useEffect, useState } from "react";


const AppContext1= createContext()

const AppProd=({children})=>{
    const[teacher,setTeacher]=useState([]);


    useEffect(()=>{
        const getTeacherDetails=async()=>{
            try{
                const response=await fetch("https://63770f6e81a568fc250b13c2.mockapi.io/teacher",{
                    method:"GET"
                })

                const data = await response.json()
                console.log(data)
                setTeacher(data) 
                if(!data){
                    console.log("unable to fetch the data")
                }
            }catch(error){

            }
        }
        getTeacherDetails()
    },[])


    return(
        <AppContext1.Provider
        value={{ teacher,setTeacher} }
        >
            {children}
        </AppContext1.Provider>
    )
}

export const Apps=()=>{
    return useContext(AppContext1)
}

export default AppProd