import {useContext, useEffect, useState} from "react"
import { TopicContext } from "../../Context/TopicContext"
import { UsersContext } from "../../Context/UsersContext"
import { QuestionContext } from "../../Context/QuestionContext"
import { useNavigate } from "react-router-dom"

function QuestionForm({params, topic}){
    const {handleAddQuestion} = useContext(TopicContext)
    const {addUserQuestion, loggedIn} = useContext(UsersContext)
    const {handleNewQuestion} = useContext(QuestionContext)

    const navigate = useNavigate()
    const [errors, setErrors] = useState()
    const errorsList = errors?.map((error, idx) => <li key={idx} style={{color: 'red'}}>{error}</li>)


    const [formData, setFormData] = useState({
        post: "",
        topic_id: parseInt(params.topic_id, 10) || 0 
    });

    useEffect(() => {
        if(!loggedIn){
            navigate("/")
        }
        return() => {
            setErrors([])
        }
    }, [loggedIn, navigate, setErrors])


    const handleChange = (e) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [e.target.name]: e.target.name === "topic_id" ? parseInt(e.target.value, 10) || 0 : e.target.value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newQuestion = {
            post: formData.post,
            topic_id: formData.topic_id
        };
    
        fetch ("/questions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newQuestion)
        })
        .then(r => r.json())
        .then(data => {
            if(data.errors) {
                setErrors(data.errors)
            } else {
                handleAddQuestion(data)
                addUserQuestion(data)
                handleNewQuestion(data)
                setFormData({
                    post: ""
    
                })
            }
        })
    }
 

    return(
    <div className="NewQuestion" >
        {errorsList}
        <h3>You selected the {topic} topic to add new question to.</h3>
        <form onSubmit={handleSubmit}>
            <input value={formData.post}  type="text" name="post" placeholder="Post" onChange={handleChange} />
            <button type="submit">Add Question</button>
        </form>
       
    </div>
    )
}

export default QuestionForm
