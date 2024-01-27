import { useContext, useEffect, useState } from "react"
import { TopicContext } from "../../Context/TopicContext"
import { UsersContext } from "../../Context/UsersContext"
import { useNavigate } from "react-router-dom"


function EditQuestion({question, toggleEditForm}) {
    const {id} = question
    const [errors, setErrors] = useState("")
    const [updateQuestion, setUpdateQuestion] = useState(question)
    const {handleDeleteQuestion, handleUpdateQuestion} = useContext(TopicContext)
    const {loggedIn} = useContext(UsersContext)
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
        .then(() => {
            handleDeleteQuestion(question)
        })
    }

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setUpdateQuestion({ ...updateQuestion, [name]: value });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch(`/questions/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({updateQuestion}),
        })
        .then((r) => r.json())
        .then((updatedQuestion) => {
          handleUpdateQuestion(updatedQuestion);
          toggleEditForm()
        })
      }

      return (
        <div>
            {errors}
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