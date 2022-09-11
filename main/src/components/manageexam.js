import { useState } from "react"
import ClassOptions from "./Options/ClassOptions"
import TestTable from "./Tables/TestTable"
import Axios from "axios"

const MExam = () => {
    const [testName, setTestName] = useState("")
    const [subject, setSubjectName] = useState("")
    const addTest = async (e) => {
        e.preventDefault()
        const newTest = {
            name: testName,
            subject: subject
        }
        await Axios.post("http://localhost:5000/api/tests/add", newTest)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        setTestName("")
        setSubjectName("")
        e.target.reset()
    }

    return (
        <div className="flex flex-col h-[90%] w-full border-black mt-6 mx-[10%] justify-between">
            <div id="upper-contianer" className="w-full border-2 h-1/3 border-black">
                <h1 className="font-semibold text-xl text-center mb-3">Manage Exam</h1>
            
                <form onSubmit={addTest} className="flex flex-col justify-center items-center mb-2 mt-3 ">
                    <label className="mb-5 font-semibold">Create Exam: <input type="text" placeholder="Enter exam name" className="border-2 w-72" onChange={(e) => setTestName(e.target.value)} required/></label>

                    <label className="mb-3 font-semibold">Select Subject: <ClassOptions onInput={(e) => setSubjectName(e.target.value)}/></label>
                    
                    <button type="submit" className=" w-72 h-8 font-semibold text-white bg-neutral-700 hover:bg-neutral-600 cursor-pointer">Confirm</button>
                </form>
            </div>
            <div id="lower-container" className="w-full border-2 h-3/5 border-black">
                <h1 className="font-semibold text-xl text-center mb-5">Exams</h1>
                <TestTable/>
            </div>
        </div>
    );
}

export default MExam;