import { useContext, useState } from "react"
import { TopicContext } from "../../Context/TopicContext"


function TopicQuestions ({question}){
    const [updateQuestion, setUpdateQuestion] = useState("")
    const {handleDeleteQuestion} = useContext(TopicContext)

    const handleDeleteClick = () => {
        fetch(`http://localhost:9292/questions/${question.id}`, {
        method: "DELETE",
        })
        .then(r => r.json())
        .then(() => {
            handleDeleteQuestion(question)
        })
    }

    const handleChange = (e) => {
        setUpdateQuestion(e.target.value)
    }

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
                    <input value={updateQuestion} type="" name="img" placeholder="Question" onChange={handleChange} />
                    <button type="submit">Edit</button>
                </form>
            <button className="del-btn" onClick={handleDeleteClick} >
            🗑️
            </button>
        </>
    )
}

export default TopicQuestions