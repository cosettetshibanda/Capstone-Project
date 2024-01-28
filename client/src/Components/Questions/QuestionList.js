import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuestionContext } from "../../Context/QuestionContext";
import { UsersContext } from "../../Context/UsersContext";
// import QuestionCard from "./QuestionCard";
import TopicQuestions from "../Topics/TopicQuestions";


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
        <TopicQuestions key={question.id} question={question} />
        
       
    ));
    return (
        <>
            {errorsList}
            <h3>Questions</h3>
            <p>Pick a topic to add a question.</p>
            <div id="question-list">{questionItems}</div>
        </>
    )
}

export default QuestionList