import React, { useState, useEffect } from 'react'
import Axios from "axios"


const ClassOptions = ({ value, onChange }) => {

    const [allClasses, setAllClasses] = useState([])
    useEffect(() => {
        Axios.get("http://localhost:5000/api/classes")
            .then(res => setAllClasses(res.data))
            .catch(err => console.log(err))
    })

    return (
        <select value={value} onChange={onChange}>
            {
                allClasses.map(c => <option key={c._id} value={c._id}>{c.className}</option>)
            }
        </select>
    )
}

export default ClassOptions