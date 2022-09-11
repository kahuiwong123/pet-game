import React, {useState, useEffect} from 'react'
import Axios from "axios"

const StudentOptions = ({onChange}) => {

    const [allStudents, setAllStudents] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:5000/api/students")
        .then(res => {
            setAllStudents(res.data)
        })
        .catch(err => console.log(err))
    })

    return (
        <select onChange={onChange}>
            {allStudents.map(student => 
                <option key={student._id} value={student._id}>{student.name + ` (${student._id})`}</option>
            )}
        </select>
    )
}

export default StudentOptions

