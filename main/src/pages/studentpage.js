import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import ClassOptions from "../components/Options/ClassOptions"
import StudentTab from "../components/Students/StudentTab";
import Axios from "axios"

const Student = () => {

    const location = useLocation()

    const [enrollClass, setEnrollClass] = useState("")
    const [allStudents, setAllStudents] = useState([])
    const [addedClass, setAddedClass] = useState()
    const [selectedStudent, setSelectedStudent] = useState({})

    useEffect(() => {
        Axios.get("http://localhost:5000/api/students")
            .then(res => {
                setAllStudents(res.data)
            })
            .then(() => setSelectedStudent(allStudents.find(({ name, _id }) => name === location.state[0] && _id === location.state[1])))
    }, [])

    const addClass = (e) => {
        e.preventDefault()
        Axios.get(`http://localhost:5000/api/classes/${enrollClass}`)
            .then(res => setAddedClass(res.data))
            .catch(err => console.log(err))

        if (addedClass !== "" || addedClass !== null) {
            selectedStudent.classes.push(addedClass)
        }

        Axios.post(`http://localhost:5000/api/students/update/${selectedStudent._id}`, selectedStudent)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        setAddedClass("")
        e.target.reset()
    }

    return (
        <ProSidebar>
            <Menu>
                <MenuItem>
                    <h2>Enroll</h2>
                    <form onSubmit={addClass}>
                        <ClassOptions value={enrollClass} onChange={e => setEnrollClass(e.target.value)}></ClassOptions>
                        <button type="submit">Confirm</button>
                    </form>
                </MenuItem>
                <MenuItem>
                    <h2>My Classes</h2>
                    {/* {selectedStudent.classes.map(clas => <StudentTab key={clas} classRef={clas} />)} */}
                    {/* {console.log(allStudents)}
                    {console.log(selectedStudent)} */}
                </MenuItem>
                <MenuItem>Calendar</MenuItem>
            </Menu>
        </ProSidebar>
    );
}

export default Student;