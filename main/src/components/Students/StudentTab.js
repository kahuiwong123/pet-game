import React, { useState, useEffect } from "react"
import axios from "axios"

const StudentTab = ({ classRef }) => {

    const [classData, setClassData] = useState({})

    const getClassData = async () => {
        const { data } = await axios.get(`http://localhost:5000/api/classes/${classRef}`)
        setClassData(data)
    }

    useEffect(() => {
        getClassData()
    }, [])

    return (
        <div>
            <h3>{classData.className}</h3>
        </div>
    )
}

export default StudentTab