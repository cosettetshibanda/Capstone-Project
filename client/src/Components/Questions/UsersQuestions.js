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

export default UsersQuestions