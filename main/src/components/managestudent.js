import React, { useEffect, useState, useRef } from "react";
import Axios from "axios"
import StudentOptions from "./Options/StudentOptions";

import StudentTable from "./Tables/StudentTable";

const MStudent = () => {

    const [allClasses, setAllClasses] = useState([])
    const [addingStudent, setAddingStudent] = useState("")
    const [deletingStudent, setDeletingStudent] = useState("")

    useEffect(() => {
        Axios.get("http://localhost:5000/api/classes")
            .then(res => { setAllClasses(res.data) })
            .catch(err => console.log(err))
    })

    const addStudent = async (e) => {
        e.preventDefault()
        const newStudent = {
            name: addingStudent
        }
        await Axios.post("http://localhost:5000/api/students/add", newStudent)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        setAddingStudent("")
        e.target.reset()
    }

    const deleteStudent = async (e) => {
        e.preventDefault()
        await Axios.delete(`http://localhost:5000/api/students/${deletingStudent}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        setDeletingStudent("")
        e.target.reset()
    }

    return (

        <div className="flex flex-col h-[90%] w-full border-black mt-6 mx-[10%] justify-between">
            <div id="upper-contianer" className="w-full border-2 h-1/3 border-black">
                <h1 className="font-semibold text-xl text-center mb-3">Manage Student</h1>


                <form onSubmit={addStudent} className="flex flex-col justify-center items-center mb-2">
                    <div className="text-center w-full mb-2">
                        <label className="font-semibold text-med text-center ">Enter Student Name : </label>
                        <input type="text" placeholder='Name...' onChange={e => setAddingStudent(e.target.value)} required className="border-2 w-72"></input>
                    </div>
                    <button type="submit" className=" w-72 h-8 font-semibold text-white bg-neutral-700  hover:bg-neutral-600 cursor-pointer" >Add Student</button>
                </form>

                <form onSubmit={deleteStudent} className="flex flex-col justify-center items-center mb-2 mt-3">
                    <div className="text-center w-full mb-2">
                        <label className="font-semibold text-med text-center ">Students: </label>
                        <StudentOptions onChange={e => setDeletingStudent(e.target.value)} />

                    </div>
                    <button type="submit" className=" w-72 h-8 font-semibold text-white bg-neutral-700 hover:bg-neutral-600 cursor-pointer" >Delete Student</button> 
                </form>
            </div>
            <div id="lower-container" className="w-full border-2 h-3/5 border-black">
                <h1 className="font-semibold text-xl text-center mb-5">Students</h1>
                <StudentTable allClasses={allClasses}/>
            </div>
        </div>

    );
}

export default MStudent;