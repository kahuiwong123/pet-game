import Axios from 'axios'
import React, { useState, useEffect } from 'react'

const TestOptions = ({ onChange, value }) => {

    const [allTests, setAllTests] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:5000/api/tests")
            .then(res => setAllTests(res.data))
            .catch(err => console.log(err))
    })

    return (
        <select value={value} onChange={onChange}>
            {allTests.map(test => <option key={test._id} value={test._id}>{test.name}</option>)}
        </select>
    )
}

export default TestOptions