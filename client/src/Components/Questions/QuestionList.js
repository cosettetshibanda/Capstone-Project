import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuestionContext } from "../../Context/QuestionContext";
import { UsersContext } from "../../Context/UsersContext";
import QuestionCard from "./QuestionCard";


function QuestionList() {
    const navigate = useNavigate();
    const {questions} = useContext(QuestionContext)
    const { loggedIn} = useContext(UsersContext)

    const [errors, setErrors] = useState()
    const errorsList = errors?.map((error, idx) => <li key={idx} style={{color: 'red'}}>{error}</li>)



    useEffect(() => {
        if(!loggedIn){
            navigate("/")
        }
        return() => {
            setErrors([])
        }
    }, [loggedIn, navigate, setErrors])

    //     const handleAddAnswerNav = () => {
    //     navigate(`/add-answers/${question.id}`)
    //   }

    //   const handleViewAnswerNav = () => {
    //     navigate(`/view-answers/${question.id}`)
    //   }



    const questionItems = questions.map((question) => (
        <div>

            <li>
                {question.post}
            </li>
            {/* {showEditForm ? (
                <EditQuestion
              question={question}
              toggleEditForm={toggleEditForm}
            //   handleEditReview={handleEditReview}
            />
          ) : (
             currentUser && currentUser.id === question.user_id ? (
              <>
                <button onClick={toggleEditForm}>Edit</button>
                <button onClick={handleDeleteClick}>Delete</button>  */}
                {/* <button onClick={handleAddAnswerNav}>Answer Question</button>
                <button onClick={handleViewAnswerNav}>View Answers</button> */}
                {/* <NavLink to={`/question/${question.id}`}>Answer Question</NavLink> */}
              {/* </>
            ) : null
          )} */}
        
        </div>
    ));
    return (
        <>
            {errorsList}
            <h3>Questions</h3>
            <div id="question-list">{questionItems}</div>
        </>
    )
}

export default QuestionList