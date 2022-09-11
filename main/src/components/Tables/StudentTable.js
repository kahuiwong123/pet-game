import React, { useState, useEffect } from 'react'
import Axios from "axios"
import { FaTimes } from 'react-icons/fa'

const StudentTable = ({ allClasses }) => {
    const [allStudents, setAllStudents] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:5000/api/students")
            .then(res => {
                setAllStudents(res.data)
            })
            .catch(err => console.log(err))
    })

    const onDelete = async (id) => {
        await Axios.delete(`http://localhost:5000/api/students/${id}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div className="flex items-center justify-center w-full overflow-y-auto">{
            (allStudents.length === 0) ? "No Students" :
                <table className="border-collapse">
                    <thead>
                        <tr >
                            <th className="text-center w-32">Name</th>
                            <th className="text-center w-60">Classes</th>
                            <th className="text-center w-60">ID</th>
                            <th className="text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allStudents.map(student =>
                            <tr key={student._id}>
                                <td className=" w-32">{student.name}</td>
                                <td className=" w-60">{(student.classes.length === 0) ? "None" :
                                    String(student.classes.map(classId => allClasses.find(({ _id }) => _id === classId).className))
                                }</td>
                                <th className=" w-60">{student._id}</th>
                                <th className=" flex justify-center"><FaTimes onClick={() => { onDelete(student._id) }} /></th>
                            </tr>
                        )}
                    </tbody>
                </table>
        }
        </div>
    )
}

export default StudentTable