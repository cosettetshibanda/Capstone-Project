import { useContext, useEffect, useState } from "react"
import { TopicContext } from "../../Context/TopicContext"
import { UsersContext } from "../../Context/UsersContext"
import EditQuestion from "../Questions/EditQuestion"
import { QuestionContext } from "../../Context/QuestionContext"
import { useNavigate } from "react-router-dom"


function TopicQuestions ({question}){
    const [showEditForm, setShowEditForm] = useState(false)
    const [errors, setErrors] = useState("")
    // const [updateQuestion, setUpdateQuestion] = useState("")
    const {handleDeleteQuestion} = useContext(TopicContext)
    const {deleteQuestion} = useContext(QuestionContext)
    const {loggedIn, currentUser, deleteUserQuestion} = useContext(UsersContext)
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
            deleteUserQuestion(question)
            deleteQuestion(question)
          })
          .catch((error) => {
            setErrors('Error deleting question:', error);
          });
      };

      const handleAddAnswerNav = () => {
        navigate(`/add-answers/${question.id}`)
      }

      const handleViewAnswerNav = () => {
        navigate(`/view-answers/${question.id}`)
      }


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
            ) :     <button onClick={handleAddAnswerNav}>Answer Question</button>
            )}
            {/* <button onClick={handleAddAnswerNav}>Answer Question</button> */}
            <button onClick={handleViewAnswerNav}>View Answers</button>
          
          </figure>
        </>
    )
}

export default TopicQuestions