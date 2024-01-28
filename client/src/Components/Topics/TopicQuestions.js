import { useContext, useEffect, useState } from "react"
import { TopicContext } from "../../Context/TopicContext"
import { UsersContext } from "../../Context/UsersContext"
import { NavLink, useNavigate } from "react-router-dom"
import EditQuestion from "../Questions/EditQuestion"


function TopicQuestions ({question}){
    const [showEditForm, setShowEditForm] = useState(false)
    const [errors, setErrors] = useState("")
    // const [updateQuestion, setUpdateQuestion] = useState("")
    const {handleDeleteQuestion} = useContext(TopicContext)
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
          .then(() => {
            handleDeleteQuestion(question);
          })
          .catch((error) => {
            console.error('Error deleting question:', error);
          });
      };

      const handleAddAnswerNav = () => {
        navigate(`/add-answers/${question.id}`)
      }

      const handleViewAnswerNav = () => {
        navigate(`/view-answers/${question.id}`)
      }



    // const handleEditChange = (e) => {
    //     const { name, value } = e.target;
    //     setUpdateQuestion({ ...updateQuestion, [name]: value });
    //   };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    
    //     fetch(`/questions/${question.id}`, {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({post: updateQuestion}),
    //     })
    //       .then((r) => r.json())
    //       .then((updatedQuestion) => handleUpdateQuestion(updatedQuestion))
    //       setUpdateQuestion("")
    //   }




      const toggleEditForm = () => {
        setShowEditForm(!showEditForm);
      };

    return (
        <>
            {errors}
            <figure>
                    <li>{question.post} </li>
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
                {/* <NavLink to={`/question/${question.id}`}>Answer Question</NavLink> */}
              </>
            ) : null
            )}
            <button onClick={handleAddAnswerNav}>Answer Question</button>
            <button onClick={handleViewAnswerNav}>View Answers</button>
          
          </figure>
        </>
    )
}

export default TopicQuestions