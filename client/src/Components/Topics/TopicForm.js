import { useContext, useState } from "react"
import { TopicContext } from "../../Context/TopicContext"
import { useNavigate } from "react-router-dom"

function TopicForm(){
    const {handleAddTopic} = useContext(TopicContext)

    const navigate = useNavigate()
    const [topic, setTopic] = useState("")

    const handleChange = (e) => {
        setTopic({ ...topic, [e.target.name]: e.target.value });
      };
      
    const handleSubmit = (e) => {
        e.preventDefault()

    
        fetch ("/topics", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(topic)
        })
        .then(r => r.json())
        .then(data => {

            handleAddTopic(data)
            navigate("/");
        })
        setTopic("")
    }


    return (

        <div className="NewTopic" >
            <form  onSubmit={handleSubmit}>
                <input 
                    onChange={handleChange}
                    value={topic} 
                    type="text" 
                    name="topic" 
                    placeholder="Topic name" />
                <button 
                    type="submit"
                    >Add Topic</button>
            </form>
        </div>
    )
}
export default TopicForm