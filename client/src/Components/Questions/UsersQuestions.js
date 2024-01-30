import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../../Context/UsersContext";
import TopicQuestions from "../Topics/TopicQuestions";


function UsersQuestions () {
    const {loggedIn, currentUser} = useContext(UsersContext)
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])

    useEffect(() => {
        if(!loggedIn) {
            navigate("/")
        }
        return () => {
            setErrors([])
        }
    }, [loggedIn, navigate, setErrors])

    const myQuestions = currentUser?.questions ? (
        currentUser.questions.map((question) => (
            <TopicQuestions key={question.id} question={question} />
        //     <li key={question.id}>
        //     <Link to={`/questions/${question.id}`}>{question.post}</Link>
        //   </li>
        ))
    ) : null


    return (
        <div>
            {errors}
            <h3>Questions you have asked.</h3>
        <ul>
            {myQuestions?.length > 0 ? myQuestions : "You haven't asked anything yet."}
        </ul>
        </div>
    )

}

// export default QuestionAnswers
// function UsersQuestions() {
//     const {question_id} = useParams()
//     const navigate = useNavigate()
//     const {loggedIn} = useContext(UsersContext)
//     const {questions} = useContext(QuestionContext)
//     const [question, setQuestion] = useState([])

//     const selectedQuestion = questions.find((question) => question.id === parseInt(question_id))
//     console.log(selectedQuestion)

//     useEffect(() => {
//         if (!loggedIn) {
//           navigate("/");
//         }
//       }, [loggedIn, navigate]);

//       useEffect(() => {
//         if(selectedQuestion){
//             if(selectedQuestion.id !== question.id)
//             setQuestion(selectedQuestion)
//         }
//       }, [selectedQuestion, question.id])
      
//     return (
//         <TopicQuestions question={question} />
//     )
// }

export default UsersQuestions