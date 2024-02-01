import { useContext } from "react"
import { UsersContext } from "../../Context/UsersContext"


function AnswerCard({answer}) {
    const {users} = useContext(UsersContext)
    
    const foundUser = users.find((user) => user.id === answer.user_id);
    
    return (
        <div>
            {answer.answer} - {foundUser.username}
        </div>
    )
}

export default AnswerCard