import TestOptions from "./Options/TestOptions";
import { useState, useEffect } from "react";
import QuestionTable from "./Tables/QuestionTable";
import Axios from "axios"
const VExam = () => {
    const [allTests, setAllTests] = useState([])
    const [testId, setTestId] = useState("")
    const [questionVal, setQuestionVal] = useState("")
    const [correctChoice, setCorrectChoice] = useState("")
    const [viewId, setViewId] = useState("")
    const [choiceValues, setChoiceValues] = useState({
        first: "",
        second: "",
        third: "",
        fourth: "",
        fifth: ""
    })

    useEffect(() => {
        Axios.get("http://localhost:5000/api/tests")
            .then(res => setAllTests(res.data))
            .catch(err => console.log(err))
    })

    const addQuestion = async (e) => {
        e.preventDefault()
        const newChoices = (Object.keys(choiceValues).reduce((arr, key) => {
            return [...arr, { choiceValue: choiceValues[key], correct: (key === correctChoice) ? true : false }]
        }, [])).filter(e => e.choiceValue !== "")

        if (newChoices.length < 2) {
            alert("Please enter at least two choices")
            return
        }

        const selectedTest = await Axios.get(`http://localhost:5000/api/tests/${testId}`).then(res => {
            return res.data
        }).catch(err => console.log(err))


        const newQuestion = {
            questionValue: questionVal,
            choices: newChoices
        }

        selectedTest.questions.push(newQuestion)
        console.log(selectedTest)
        await Axios.post(`http://localhost:5000/api/tests/update/${testId}`, selectedTest)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        setQuestionVal("")
        setChoiceValues({
            first: "",
            second: "",
            third: "",
            fourth: "",
            fifth: ""
        })
        e.target.reset()
    }
    return (
        <div className="flex flex-col h-[90%] w-full border-black mt-6 mx-[10%] justify-between">
            <div id="lupper-container" className="w-full border-2 h-[37.5%] border-black">
                <form onSubmit={addQuestion} className="flex flex-col justify-center items-center mb-2">
                    <div>
                        <label className="font-semibold text-med ">Add Questions To : </label>

                        <TestOptions onChange={e => setTestId(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex">
                            <label className="font-semibold text-med ">Enter Question: </label>
                            <input type="text" onChange={e => setQuestionVal(e.target.value)} className="border-2 w-72 ml-1 mb-1" required></input>
                        </div>
                        {[...Array(5)].map((e, i) => <div className="flex" key={"choice-" + (i + 1)}>
                            <label className="font-semibold text-med ">{`Choice ${i + 1}: `}</label>
                            <input type="text" name={Object.keys(choiceValues)[i]} onChange={e => setChoiceValues({ ...choiceValues, [e.target.name]: e.target.value })} className="border-2 w-[335px] mb-1 ml-1"></input>
                        </div>)}
                    </div>
                    <div>
                        <select   select onChange={e => setCorrectChoice(e.target.value)}  className="border-2 mr-2 w-40" required>
                        {[...Array(5)].map((e, i) => <option key={i} value={Object.keys(choiceValues)[i]} disabled={choiceValues[Object.keys(choiceValues)[i]].length === 0}> {`Choice ${i + 1}`} </option>)}
                    </select>
                        <button type="submit" className="w-40 h-8 font-semibold text-white bg-neutral-700  hover:bg-neutral-600 cursor-pointer">Confirm</button>
                    </div>
                </form>
            </div>

            <div id="lower-container" className="w-full border-2 h-3/5 border-black">
                <h1 className="font-semibold text-xl text-center mb-3">Questions</h1>
                <div className="flex flex-row justify-center ">
                    <label className="font-semibold text-med">View Questions from : </label>
                    <TestOptions value={viewId} onChange={e => setViewId(e.target.value)} />
                </div>
                {viewId !== "" && <QuestionTable test={allTests.find(test => test._id === viewId)} />}
            </div>
        </div>
    );
}

export default VExam;