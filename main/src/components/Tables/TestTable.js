import React, { useState, useEffect } from 'react'
import Axios from "axios"
import { FaTimes } from "react-icons/fa"
const TestTable = () => {
    const [allTests, setAllTests] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:5000/api/tests")
            .then(res => setAllTests(res.data))
            .catch(err => console.log(err))
    })

    const onDelete = async (id) => {
        await Axios.delete(`http://localhost:5000/api/tests/${id}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div className="flex items-center justify-center w-full overflow-y-auto">{
            (allTests.length === 0) ? "No tests available" :
                <table className="border-collapse">
                    <thead>
                        <tr>
                            <th className="text-center w-32">Test Name</th>
                            <th className="text-center w-60">Subject</th>
                            <th className="text-center w-60">Number of Questions</th>
                            <th className="text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allTests.map(test =>
                                <tr key={test._id}>
                                    <td className=" w-32">{test.name}</td>
                                    <td className=" w-60">{test.subject}</td>
                                    <th className=" w-60">{test.questions.length}</th>
                                    <th className=" flex justify-center"><FaTimes onClick={() => { onDelete(test._id) }} /></th>
                                </tr>)
                        }
                    </tbody>
                </table>
        }</div>
    )
}

export default TestTable