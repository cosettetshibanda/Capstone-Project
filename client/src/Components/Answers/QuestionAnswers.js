import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { UsersContext } from "../../Context/UsersContext"
import TopicQuestions from "../Topics/TopicQuestions"
import { QuestionContext } from "../../Context/QuestionContext"


function QuestionAnswers () {
    const {questions} = useContext(QuestionContext)
    const params = useParams()
    const [selectedQuestion, setSelectedQuestion] = useState({
        answers: []
    })
    console.log(questions)


    const question = questions.find((q) => q.id === parseInt(params.question_id));

useEffect(() => {
  if (question !== undefined) {
    setSelectedQuestion((prevSelectedQuestion) => {
       
      return question;
    });
  }
}, [questions, params, question]);
    // const answer = selectedQuestion.answers.map((answer) => (
    //     <div>
    //         {selectedQuestion.post}
    //         {answer.answer}
    //         key={question.id}
    //     </div>
            
    // ))

    return(
        <div>
            {/* <QuestionForm params={params} topic={selectedTopic.topic} /> */}
            {/* <div id="Answer-List">{answer}</div> */}
        </div>
    )

}
//     const {loggedIn, currentUser} = useContext(UsersContext)
//     const navigate = useNavigate()
//     const [errors, setErrors] = useState([])

//     useEffect(() => {
//         if(!loggedIn) {
//             navigate("/")
//         }
//         return () => {
//             setErrors([])
//         }
//     }, [loggedIn, navigate, setErrors])

//     const myQuestions = currentUser?.questions ? (
//         currentUser.questions.map((question) => (
//             <TopicQuestions key={question.id} question={question} />
//         //     <li key={question.id}>
//         //     <Link to={`/questions/${question.id}`}>{question.post}</Link>
//         //   </li>
//         ))
//     ) : null


//     return (
//         <div>
//             {errors}
//             <h3>Questions you have asked.</h3>
//         <ul>
//             {myQuestions?.length > 0 ? myQuestions : "You haven't asked anything yet."}
//         </ul>
//         </div>
//     )

// }

export default QuestionAnswers