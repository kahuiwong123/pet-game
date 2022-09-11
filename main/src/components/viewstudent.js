import StudentTable from "./Tables/StudentTable";
import { useState, useEffect } from "react"
import Axios from "axios"
const VStudent = () => {

    const [allClasses, setAllClasses] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:5000/api/classes")
            .then(res => { setAllClasses(res.data) })
            .catch(err => console.log(err))
    })

    return (
        <div className="flex flex-col h-[90%] w-full border-2 border-black mt-6 mx-[10%] ">
            <h1 className="font-semibold text-xl text-center mb-3">
                Students
            </h1>
            <StudentTable allClasses={allClasses} />
        </div>
    );
}

export default VStudent;