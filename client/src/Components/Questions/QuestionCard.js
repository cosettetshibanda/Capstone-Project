import { useContext, useState } from "react"
import { UsersContext } from "../../Context/UsersContext"
import EditQuestion from "./EditQuestion"
import { useNavigate } from "react-router-dom"


function QuestionCard({question}) {
    const {currentUser} = useContext(UsersContext)
    const [showEditForm, setShowEditForm] = useState
    const navigate = useNavigate()

    const toggleEditForm = () => {
        setShowEditForm(!showEditForm);
    }

    const handleAddAnswerNav = () => {
        navigate(`/add-answers/${question.id}`)
      }

      const handleViewAnswerNav = () => {
        navigate(`/view-answers/${question.id}`)
      }


   return (
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
                <button onClick={handleAddAnswerNav}>Answer Question</button>
                <button onClick={handleViewAnswerNav}>View Answers</button>
                {/* <NavLink to={`/question/${question.id}`}>Answer Question</NavLink> */}
              </>
            ) : null
          )}
          
          </figure>
   )
}

export default QuestionCard