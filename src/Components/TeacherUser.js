import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Apps } from "../Context/AppProd";
import BaseApp from "../Core/Base";


export default function TeacherUser() {
    const history = useNavigate();

    const { teacher, setTeacher } = Apps();

    const [Name, setName] = useState("")
    const [id, setId] = useState("")
    const [Age, setAge] = useState("")
    const [Email, setEmail] = useState("")
    const [Subject, setSubject] = useState("")
    const [Qualification, setQualification] = useState("")

    const addNewUser = async () => {
        const newTeacherUSer = {
            id,
            Name,
            Age,
            Email,
            Subject,
            Qualification
        }

        try {
            const response = await fetch(`https://63770f6e81a568fc250b13c2.mockapi.io/teacher`, {
                method: "POST",
                body: JSON.stringify(newTeacherUSer),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const data = await response.json();
            console.log(data);

            setTeacher([...teacher, newTeacherUSer])
            history("/teacher")

        } catch (error) {
            console.log("error")
        }


    }



    return (
        <BaseApp
            title={"Add a New Teacher Details"}>
            <div className="new">
                <input placeholder="Id" className="id" type="number"
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                /> <br></br>

                <input placeholder="Name" className="name" type="text"
                    value={Name}
                    onChange={(event) => setName(event.target.value)}
                /> <br></br>

                <input placeholder="Age" className="age" type="number"
                    value={Age}
                    onChange={(event) => setAge(event.target.value)}
                /><br></br>

                <input placeholder="Email" className="email" type="text"
                    value={Email}
                    onChange={(event) => setEmail(event.target.value)}
                /><br></br>

                <input placeholder="Subject" className="subject" type="text"
                    value={Subject}
                    onChange={(event) => setSubject(event.target.value)}
                /><br></br>

                <input placeholder="Qualification" className="qualification" type="text"
                    value={Qualification}
                    onChange={(event) => setQualification(event.target.value)}
                /><br></br>

                <button
                    onClick={addNewUser} className="add"
                >Add</button>

            </div>
            <footer className="write5">
                    Contact us
                    <div>Email :  teacher@gmail.com</div>
                    <div>Phone : 86*****743</div>
                </footer>
        </BaseApp>

    )
}
