import { createContext, useContext, useEffect, useState } from "react";
import { UsersContext } from "./UsersContext";
import { useNavigate } from "react-router-dom";


const TopicContext = createContext(null)

const TopicProvider = ({children}) => {
    const [topics, setTopics] = useState([])
    const {loggedIn} = useContext(UsersContext)
    const navigate = useNavigate()

    const loadTopics = () => {
        if(loggedIn) {
            fetch("/topics")
            .then(r => r.json())
            .then(data => setTopics(data))
        }
    } 
    
    useEffect(loadTopics, [loggedIn, navigate])

    

    const handleAddTopic = (newTopic) => {
        setTopics([...topics, newTopic])
    }

    

    function handleDeleteQuestion(question) {
        const topic = topics.find((topic) => topic.id === question.topic.id)
        const updatedQuestions = topic.questions.filter((q) => q.id !==question.id)
        const updatedTopics = topics.map((t) => t.id === topic.id ? {...topic, questions: updatedQuestions} : t)

        setTopics(updatedTopics)
    }

    function handleUpdateQuestion(updatedQuestion) {
        console.log(updatedQuestion)
        const topic = topics.find((topic) => topic.id === updatedQuestion.topic.id);
        console.log(topic)
        // Check if topic is found
        if (!topic) {
          console.error(`Topic with id ${updatedQuestion.topic_id} not found.`);
          return;
        }
      
        const updatedQuestions = topic.questions.map((question) =>
          question.id === updatedQuestion.id ? updatedQuestion : question
        );
      
        const updatedTopics = topics.map((t) =>
          t.id === topic.id ? { ...topic, questions: updatedQuestions } : t
        );
      
        setTopics(updatedTopics);
      }

      function handleAddQuestion(newQuestion) {
        const topic = newQuestion.topic ? topics.find((t) => t.id === newQuestion.topic.id) : null;
  
        if (!topic) {
          return; 
        }
        const updatedQuestions = [...topic.questions, newQuestion];
        const updatedTopics = topics.map((t) =>
          t.id === topic.id ? { ...topic, questions: updatedQuestions } : t
        );
        setTopics(updatedTopics);
      }
      
      
    // function handleUpdateQuestion(updatedQuestion) {
    //     const topic = topics.find((topic) => topic.id === updatedQuestion.topic_id)
    //     const updatedQuestions = topic.questions.map((question) => question.id === updatedQuestion.id ? updatedQuestion : question)
    //     const updatedTopics = topics.map((t) => t.id === topic.id ? {...topic, questions: updatedQuestions} : t)

    //     setTopics(updatedTopics)
    // }



    return(
        <TopicContext.Provider value={{topics, setTopics, handleAddTopic, handleDeleteQuestion, handleUpdateQuestion, handleAddQuestion}}>{children}</TopicContext.Provider>
    )
}

export {TopicContext, TopicProvider}