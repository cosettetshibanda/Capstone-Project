import {useEffect, useState} from "react"

function QuestionForm({params, topic}){
    const [formData, setFormData] = useState({
        post: "",
        topic_id: params.id
    })


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] :e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newQuestion = {
            ...formData
        }
    
        fetch ("/questions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newQuestion)
        })
        .then(r => r.json())
        .then(data => {

            // handleAddQuestion(data)
        })
        setFormData({
            name: "",
            img: ""
        })
    }
 
    console.log(topic)
    return(
    <div className="NewQuestion" >
        <h3>You selected the {topic} topic to add new question to.</h3>
        <form onSubmit={handleSubmit}>
            <input value={formData.post}  type="text" name="name" placeholder="Post" onChange={handleChange} />
            <button type="submit">Add Question</button>
        </form>
       
    </div>
    )
}

export default QuestionForm
