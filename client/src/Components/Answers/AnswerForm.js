import { useContext, useState } from "react"
import { QuestionContext } from "../../Context/QuestionContext"
import { useParams } from "react-router-dom"


function AnswerForm(){
    const params = useParams()
    const {questions} = useContext(QuestionContext)

    const question = questions.find((question) => question.id === parseInt(params.question_id))

    const [formData, setFormData] = useState({
        answer: "",
        question_id: params.id
    })


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] :e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newAnswer = {
            ...formData
        }
    
        fetch ("/answers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAnswer)
        })
        .then(r => r.json())
        .then(data => {

            // handleAddQuestion(data)
        })
        setFormData({
            answer: ""
        })
    }
 
    return(
    <div className="NewAnswer" >
        <h3>{question.post}</h3>
        <form onSubmit={handleSubmit}>
            <input value={formData.answer}  type="text" name="answer" placeholder="Post" onChange={handleChange} />
            <button type="submit">Add Answer</button>
        </form>
       
    </div>
    )
}

export default AnswerForm
