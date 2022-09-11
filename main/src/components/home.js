const dHome = ()  => {

    return (
        <div className="flex flex-col h-[90%] w-full  border-black mt-6 mx-[10%] justify-between" >
            <h1 className="font-semibold text-xl text-center mb-3">Home Page</h1>
            <div id="container-upper" className="w-full border-2 h-1/3 border-black"> Student Stats Overview</div>
            <div id="container-lower" className="w-full  h-1/2 flex justify-between">
                <div className="w-[55%]  border-black border-2 ">Calender</div>
                <div className="w-[42.5%]  border-black border-2">To do List</div>
            </div>
        </div>
    );
}

export default dHome;