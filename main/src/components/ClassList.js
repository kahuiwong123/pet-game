import React, { useState, useEffect } from 'react'
import Axios from "axios"
import { FaTimes } from "react-icons/fa"

const ClassList = () => {

    const [allClasses, setAllClasses] = useState([])

    const onDelete = async (id) => {
        await Axios.delete(`http://localhost:5000/api/classes/${id}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        Axios.get("http://localhost:5000/api/classes")
            .then(res => setAllClasses(res.data))
            .catch(err => console.log(err))
    })

    return (
        <div className="flex flex-col items-center justify-center w-full overflow-y-auto">
            <h2>Available Classes</h2>
            <ul>
                {
                    allClasses.map(c =>
                        <li key={c._id} className='flex items-center'>{c.className} <FaTimes onClick={() => onDelete(c._id)} /> </li>)
                }
            </ul>
        </div>
    )
}

export default ClassList