import { useContext, useEffect, useState } from "react"
import { TopicContext } from "../../Context/TopicContext"
import { UsersContext } from "../../Context/UsersContext"
import { useNavigate } from "react-router-dom"
import EditQuestion from "../Questions/EditQuestion"


function TopicQuestions ({question}){
    const [showEditForm, setShowEditForm] = useState(false)
    const [errors, setErrors] = useState("")
    const [updateQuestion, setUpdateQuestion] = useState("")
    const {handleDeleteQuestion, handleUpdateQuestion} = useContext(TopicContext)
    const {loggedIn, currentUser} = useContext(UsersContext)
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
        fetch(`/questions/${question.id}`, {
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
    
        fetch(`/questions/${question.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({post: updateQuestion}),
        })
          .then((r) => r.json())
          .then((updatedQuestion) => handleUpdateQuestion(updatedQuestion))
          setUpdateQuestion("")
      }

      const findUsername = () => {
        if (currentUser.id === question.user_id){
          return currentUser.username
        } else {
          return null
        }
      }

      const toggleEditForm = () => {
        setShowEditForm(!showEditForm);
      };

    return (
        <>
            {errors}
            <figure>
                {findUsername ? (
                    <li>{question.post} - {findUsername.username}</li>
                    ) : (
                    <li>{question.post} - No username found</li>
                    )}
                {showEditForm ? (
                <EditQuestion
              question={question}
              toggleEditForm={toggleEditForm}
            //   handleEditReview={handleEditReview}
            />
          ) : (
             currentUser && currentUser.id === question.user_id ? (
              <>
                <button onClick={toggleEditForm}>Edit</button>
                <button onClick={handleDeleteClick}>Delete</button> 
              </>
            ) : null
          )}
          
          </figure>
        </>
    )
}

export default TopicQuestions