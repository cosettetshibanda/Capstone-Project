import { useParams } from "react-router-dom";
import { TopicContext } from "../../Context/TopicContext";
import { useContext, useEffect, useState } from "react";
import TopicQuestions from "./TopicQuestions";





function TopicCard (){
    const {topics} = useContext(TopicContext)
    const params = useParams()
    const [selectedTopic, setSelectedTopic] = useState({
        questions: []
    })
    console.log(topics)

    const topic = topics.find((topic) => topic.id === parseInt(params.topic_id))

    console.log(topic)
    console.log(params)
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
            <div id="Question-List">{questions}</div>
        </div>
    )


}

export default TopicCard