import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Dhome from '../components/home';
import Mclass from '../components/manageclass';
import Mquest from '../components/managequest';
import Mexam from '../components/manageexam';
import Mstu from '../components/managestudent';
import Vclass from '../components/viewclass';
import Vstat from '../components/viewstat';
import Vstu from '../components/viewstudent';
import Vexam from '../components/viewexam';


const Dashboard = () => {

    useEffect(() => {
        document.title = "Dashboard";
    }, []);

    const [active, setActive] = useState("home");
    const navigate = useNavigate()
    return (
        <div className="flex flex-row">
            <nav className="fixed h-screen w-64">
                <div className="fixed left-0 h-screen w-64 bg-cyan-600 flex flex-col">
                    <h1 className="text-white text-center text-4xl font-bold mt-5">Dashboard</h1>

                    <div className="flex flex-col justify-evenly h-2/4 mt-36 text-lg font-semibold " >
                        <input type="submit" value="Home Page "className=" border border-black hover:text-white " onClick ={() => setActive("home")} />
                        <input type="submit" value="Manage Students "className=" border border-black hover:text-white " onClick ={() => setActive("mstudent")} />
                        <input type="submit" value="Manage Classes" 
                    className="border border-black hover:text-white" onClick ={() => setActive("mclass")}/>
                        <input type="submit" value="Manage Questions" className="border border-black hover:text-white" onClick ={() => setActive("mquest")}/>
                        <input type="submit" value="Manage Exams" className="border border-black hover:text-white" onClick ={() => setActive("mexam")}/>
                        <input type= "submit" value="View Students" className="border border-black hover:text-white" onClick ={() => setActive("vstudent")}/>
                        <input type="submit" value="View Classes" className="border border-black hover:text-white"onClick ={() => setActive("vclass")}/>
                        <input type="submit" value="View Exams" className="border border-black hover:text-white" onClick ={() => setActive("vexam")}/>
                        <input type="submit" value="Class Statistics" className="border border-black hover:text-white" onClick ={() => setActive("vstats")}/>
                        <input type="submit" value="Log Out" className="mt-24 border border-black file:hover:text-white" onClick={() => navigate("/")}/>
                    </div>
                </div>
            </nav>
            <main className=" flex flex-col w-full ml-64 h-screen">
                <h1 className="mt-2 w-full text-right text-s font-semibold ml-[-36px] ">Welecome back, User<span className="border-2 border-black  ml-5 w-15 h-[25px]  rounded-3xl inline"> IMG </span></h1>
                <div className="flex h-full">
                    {active === "home" && <Dhome />}
                    {active === "mclass" && <Mclass />}
                    {active === "mquest" && <Mquest />}
                    {active === "mexam" && <Mexam />}
                    {active === "mstudent" && <Mstu />}

                    {active === "vclass" && <Vclass />}
                    {active === "vstudent" && <Vstu />}
                    {active === "vexam" && <Vexam />}
                    {active === "vstats" && <Vstat />}

                </div>
            </main>
        </div>
    );
}

export default Dashboard;