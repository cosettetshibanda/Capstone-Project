import { useContext, useEffect, useState } from "react"
import { QuestionContext } from "../../Context/QuestionContext"
import { useParams } from "react-router-dom"
import AnswerCard from "./AnswerCard"


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



    const answers =
    selectedQuestion && selectedQuestion.answers && selectedQuestion.answers.length > 0
      ? selectedQuestion.answers.map((answer) => (
          <AnswerCard key={answer.id} answer={answer} />        
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