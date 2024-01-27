import { useParams } from "react-router-dom";
import { TopicContext } from "../../Context/TopicContext";
import { useContext, useEffect, useState } from "react";
import TopicQuestions from "./TopicQuestions";
import QuestionForm from "../Questions/QuestionForm";





function TopicCard (){
    const {topics} = useContext(TopicContext)
    const params = useParams()
    const [selectedTopic, setSelectedTopic] = useState({
        questions: []
    })


    const topic = topics.find((topic) => topic.id === parseInt(params.topic_id))


    useEffect(() => {
        if(topic){
            setSelectedTopic(topic)
        }
    },[topics, params, topic])

    const questions = selectedTopic.questions.map((question) => (
        <TopicQuestions 
            key={question.id}
            question={question}
        />
    ))

    return(
        <div>
            <QuestionForm params={params} topic={selectedTopic.topic} />
            <div id="Question-List">{questions}</div>
        </div>
    )

}

export default TopicCard