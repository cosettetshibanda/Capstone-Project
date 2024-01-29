import { useContext, useEffect, useState } from "react"
import { QuestionContext } from "../../Context/QuestionContext"


function AnswerList() {
    const { questions } = useContext(QuestionContext)
    const params = useParams()
    const [selectedQuestion, setSelectedQuestion] = useState({
        answers: []
    })


    const question = questions.find((question) => question.id === parseInt(params.question_id))


    useEffect(() => {
        if(question){
            setSelectedQuestion(question)
        }
    },[questions, params, question])

    const answers = selectedQuestion.answers.map((answer) => (
        <>
            <h3>{selectedQuestion.post}</h3>
            {answer.answer}
        </>
    ))

    return(
        <div>
            <div id="Answer-List">{answers}</div>
        </div>
    )

}
