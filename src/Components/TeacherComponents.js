
import React from "react";
import { useNavigate } from "react-router-dom";
import { Apps } from "../Context/AppProd";
import BaseApp from "../Core/Base";


export default function TeacherComponents() {
    const history = useNavigate();

    const { teacher, setTeacher } = Apps();

    const deleteUser = async (idx) => {
        try {
            const response = await fetch(`https://63770f6e81a568fc250b13c2.mockapi.io/teacher/${idx}`, {
                method: "Delete",
            });
            const data = await response.json();
            console.log("after the data", data);

            const alterList = teacher.filter((per) => per.id !== idx);
            console.log(alterList);
            setTeacher(alterList);
            if (!data) {
                console.log("Could not delete data");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <BaseApp title="Teacher Details">
            <div className="teacher-content">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Qualification</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teacher &&
                            teacher.map((person, idx) => (
                                <tr key={idx} className="teacher-row">
                                    <td>{person.Name}</td>
                                    <td>{person.Age}</td>
                                    <td>{person.Email}</td>
                                    <td>{person.Subject}</td>
                                    <td>{person.Qualification}</td>
                                    <td className="btn-group">
                                        <button
                                            className="btn edit-btn"
                                            onClick={() => history(`/teacherEdit/${person.id}`)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn view-btn"
                                            onClick={() => history(`/teacher/${idx}`)}
                                        >
                                            View
                                        </button>
                                        <button
                                            className="btn del-btn"
                                            onClick={() => deleteUser(person.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <footer className="write3">
                    Contact us
                    <div>Email :  teacher@gmail.com</div>
                    <div>Phone : 86*****743</div>
                </footer>
        </BaseApp>
    );
}
