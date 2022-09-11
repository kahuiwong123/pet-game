import ClassList from "./ClassList";
const VClass = () => {

    return (
        <div className="flex flex-col h-[90%] w-full border-2 border-black mt-6 mx-[10%] ">
            <h1 className="font-semibold text-xl text-center mb-3">
                Classes
            </h1>
            <ClassList />
        </div>
    );
}

export default VClass;