import { useContext, useState } from "react"
import { TopicContext } from "../../Context/TopicContext"


function TopicQuestions ({question}){
    const [updateQuestion, setUpdateQuestion] = useState("")
    const {handleDeleteQuestion, handleUpdateQuestion} = useContext(TopicContext)

    const handleDeleteClick = () => {
        fetch(`http://localhost:9292/questions/${question.id}`, {
        method: "DELETE",
        })
        .then(r => r.json())
        .then(() => {
            handleDeleteQuestion(question)
        })
    }

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setUpdateQuestion({ ...updateQuestion, [name]: value });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch(`http://localhost:9292/questions/${question.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({post: updateQuestion}),
        })
          .then((r) => r.json())
          .then((updatedQuestion) => handleUpdateQuestion(updatedQuestion))
          setUpdateQuestion("")
      }

    return (
        <>
            <li>
                {question.post}
            </li>
            <form onSubmit={handleSubmit}>
                    <input value={question.post} type="" name="post" onChange={handleEditChange} />
                    <button type="submit">Edit</button>
                </form>
            <button className="del-btn" onClick={handleDeleteClick} >
            🗑️
            </button>
        </>
    )
}

export default TopicQuestions