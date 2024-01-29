import { useContext, useState } from "react"
import { TopicContext } from "../../Context/TopicContext"
import { useNavigate } from "react-router-dom"

function TopicForm(){
    const {handleAddTopic} = useContext(TopicContext)

    const navigate = useNavigate()
    const [topic, setTopic] = useState("")

    const handleChange = (e) => {
        setTopic(e.target.value);
      };


   const handleSubmit = (e) => {
  e.preventDefault();

  fetch("/topics", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ topic: topic }), // Ensure topic is wrapped in an object with the key "topic"
  })
    .then((r) => r.json())
    .then((data) => {
      handleAddTopic(data);
      navigate("/");
    });

  setTopic(""); // Clear the input after submission
};


    return (

        <div className="NewTopic" >
            <form  onSubmit={handleSubmit}>
                <input 
                    onChange={handleChange}
                    value={topic} 
                    type="text" 
                    name="topic" 
                    placeholder="Topic Name" />
                <button 
                    type="submit"
                    >Add Topic</button>
            </form>
        </div>
    )
}
export default TopicForm