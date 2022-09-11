import Axios from 'axios'
import React from 'react'
import { FaTimes } from "react-icons/fa"

const QuestionTable = ({ test }) => {


    const onDelete = async (deleteId) => {
        const newQuestions = test.questions.filter(question => question._id !== deleteId)
        const newTest = { ...test, questions: newQuestions }
        console.log(newTest)
        await Axios.post(`http://localhost:5000/api/tests/update/${test._id}`, newTest)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div className="flex items-center justify-center w-full overflow-y-auto">
        <table>
            <thead>
                <tr>
                    <th className="text-center w-60">Question</th>
                    <th className="text-center w-60">Answer Choices</th>
                    <th className="text-center w-32">Correct Choice</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {test.questions.map((question) =>
                    <tr key={question._id}>
                        <td>{question.questionValue}</td>
                        <td>{
                            <ol>
                                {Array.from(question.choices.map((choice, index) => <li key={index}>{choice.choiceValue}</li>))}
                            </ol>
                        }</td>
                        <td>{question.choices.find(choice => choice.correct).choiceValue}</td>
                        <td><FaTimes onClick={() => onDelete(question._id)} /></td>
                    </tr>
                )}
            </tbody>
        </table>
        </div>
    )
}

export default QuestionTable