import { createContext, useContext, useEffect, useState } from "react"
import { UsersContext } from "./UsersContext"
import { useNavigate } from "react-router-dom"


const QuestionContext = createContext(null)

const QuestionProvider = ({children}) => {
    const [questions, setQuestions] = useState([])
    const {loggedIn} = useContext(UsersContext)
    const navigate = useNavigate()

    const loadQuestions = () => {
        if(loggedIn) {
            fetch("/questions")
            .then(r => r.json())
            .then(data => setQuestions(data))
        }
    } 
    
    useEffect(loadQuestions, [loggedIn, navigate])

    

    const handleAddQuestion = (newQuestion) => {
        setQuestions([...questions, newQuestion])
    }

    

    // function handleDeleteQuestion(question) {
    //     const topic = topics.find((topic) => topic.id === question.topic.id)
    //     const updatedQuestions = topic.questions.filter((q) => q.id !==question.id)
    //     const updatedTopics = topics.map((t) => t.id === topic.id ? {...topic, questions: updatedQuestions} : t)

    //     setTopics(updatedTopics)
    // }

    // function handleUpdateQuestion(updatedQuestion) {
    //     const topic = topics.find((topic) => topic.id === updatedQuestion.topic.id);
      
    //     // Check if topic is found
    //     if (!topic) {
    //       console.error(`Topic with id ${updatedQuestion.topic_id} not found.`);
    //       return;
    //     }
      
    //     const updatedQuestions = topic.questions.map((question) =>
    //       question.id === updatedQuestion.id ? updatedQuestion : question
    //     );
      
    //     const updatedTopics = topics.map((t) =>
    //       t.id === topic.id ? { ...topic, questions: updatedQuestions } : t
    //     );
      
    //     setTopics(updatedTopics);
    //   }
    // function handleUpdateQuestion(updatedQuestion) {
    //     const topic = topics.find((topic) => topic.id === updatedQuestion.topic_id)
    //     const updatedQuestions = topic.questions.map((question) => question.id === updatedQuestion.id ? updatedQuestion : question)
    //     const updatedTopics = topics.map((t) => t.id === topic.id ? {...topic, questions: updatedQuestions} : t)

    //     setTopics(updatedTopics)
    // }



    return(
        <QuestionContext.Provider value={{questions, setQuestions, handleAddQuestion}}>{children}</QuestionContext.Provider>
    )
}

export {QuestionContext, QuestionProvider}