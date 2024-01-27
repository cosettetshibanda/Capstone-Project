import { useContext, useEffect, useState } from "react";
import { TopicContext } from "../../Context/TopicContext";
import { UsersContext } from "../../Context/UsersContext";
import { NavLink, useNavigate } from "react-router-dom";



function TopicList() {
    const navigate = useNavigate();
    const {topics} = useContext(TopicContext)
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


    const topicItems = topics.map((topic) => (
      <li>
        <NavLink to={`/topic/${topic.id}`}>{topic.topic}</NavLink>
      </li>
    
    ));
    return (
        <>
            {errorsList}
            <div id="topic-list">{topicItems}</div>
        </>
    )
}

export default TopicList