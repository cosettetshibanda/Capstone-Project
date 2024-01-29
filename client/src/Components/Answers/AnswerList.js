import { useContext, useEffect, useState } from "react"
import { QuestionContext } from "../../Context/QuestionContext"
import { useParams } from "react-router-dom"


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

    console.log(selectedQuestion, "selectedQuestion");

    const answers =
    selectedQuestion && selectedQuestion.answers && selectedQuestion.answers.length > 0
      ? selectedQuestion.answers.map((answer) => (
          <li>

              {answer.answer}
          </li>
        
        ))
        : "No answers available";
        return(
            <div>
            <h3>{selectedQuestion.post}</h3>
            <div id="Answer-List">{answers}</div>
        </div>
    )

}

export default AnswerList