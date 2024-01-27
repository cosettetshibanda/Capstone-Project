import { useState } from "react"


function AnswerForm(){

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
        <h3>You selected the {topic} topic to add new question to.</h3>
        <form onSubmit={handleSubmit}>
            <input value={formData.answer}  type="text" name="answer" placeholder="Post" onChange={handleChange} />
            <button type="submit">Add Question</button>
        </form>
       
    </div>
    )
}

export default AnswerForm
