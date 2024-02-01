import { useContext, useEffect, useState } from "react"
import { TopicContext } from "../../Context/TopicContext"
import { UsersContext } from "../../Context/UsersContext"
import { useNavigate } from "react-router-dom"
import { QuestionContext } from "../../Context/QuestionContext"


function EditQuestion({question, toggleEditForm}) {
    const {id} = question
    const [errors, setErrors] = useState([])
    const errorsList = errors?.map((error, idx) => <li key={idx} style={{color: 'red'}}>{error}</li>)
    const [updateQuestion, setUpdateQuestion] = useState(question)
    const {handleDeleteQuestion, handleUpdateQuestion} = useContext(TopicContext)
    const {updateUserQuestion, loggedIn} = useContext(UsersContext)
    const {editQuestion} = useContext(QuestionContext)
    const navigate = useNavigate()


    useEffect(() => {
        if(!loggedIn){
            navigate("/")
        }
        return() => {
            setErrors([])
        }
    }, [loggedIn, navigate, setErrors])

    const handleDeleteClick = () => {
        fetch(`/questions/${id}`, {
        method: "DELETE",
        })
        .then(r => r.json())
        .then(question => {
          if(question.errors){
            setErrors(question.errors)
          } else {
            handleDeleteQuestion(question)
          }

        })
    }

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setUpdateQuestion({ ...updateQuestion, [name]: value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(updateQuestion);
    
        fetch(`/questions/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateQuestion),
        })
        .then((r) => {
            if (!r.ok) {
                // If the response status is not OK (e.g., 422 Unprocessable Entity), handle the error
                return r.json().then((errorData) => Promise.reject(errorData));
            }
            return r.json(); // Parse the response body for successful requests
        })
        .then((updatedQuestion) => {
            handleUpdateQuestion(updatedQuestion);
            updateUserQuestion(updatedQuestion);
            editQuestion(updateQuestion);
            toggleEditForm();
        })
        .catch((error) => {
            // Handle the error and setErrors
            setErrors(error.errors || ["An unexpected error occurred"]);
            console.error("Error:", error);
        });
    };
console.log(errorsList, "errorsList")
      return (
        <div>
            {errorsList}
            <form onSubmit={handleSubmit}>
                <input value={updateQuestion.post} type="text" name="post" onChange={handleEditChange} />
                <button type="submit">Edit</button>
            </form>
            <button className="del-btn" onClick={handleDeleteClick} >
            🗑️
            </button>
            
        </div>

      )

}

export default EditQuestion