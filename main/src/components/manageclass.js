import ClassList from "./ClassList";
import { useState } from "react";
import Axios from "axios"
const MClass = () => {

    const [newClass, setNewClass] = useState("")

    const addClass = async (e) => {
        e.preventDefault()
        const cls = {
            className: newClass
        }
        await Axios.post("http://localhost:5000/api/classes/add", cls)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        setNewClass("")
        e.target.reset()
    }

    return (
        <div className="flex flex-col h-[90%] w-full border-black mt-6 mx-[10%] justify-between">
            <div id="upper-contianer" className="w-full border-2 h-1/3 border-black">
                <h1 className="font-semibold text-xl text-center mb-3">Manage Class</h1>
            
                <form onSubmit={addClass} className="flex flex-col justify-center items-center mb-2 mt-5">
                    <label className="mb-2 font-semibold">Create New Class : </label>
                    <input type="text" placeholder="Enter class name" className="border-2 w-72 " onInput={(e) => setNewClass(e.target.value)}></input>
                    <button type="submit" className=" w-72 h-8 font-semibold text-white bg-neutral-700 hover:bg-neutral-600 cursor-pointer mt-5">Confirm</button>
                </form>
            </div>
            <div id="lower-container" className="w-full border-2 h-3/5 border-black">
                <h1 className="font-semibold text-xl text-center mb-5">Classes</h1>
                <ClassList />
            </div>
            
        </div>
    );
}

export default MClass;