import { useContext, useState } from "react"
import { TopicContext } from "../../Context/TopicContext"
import { useNavigate } from "react-router-dom"

function TopicForm(){
    const {handleAddTopic} = useContext(TopicContext)
    const [errors, setErrors] = useState()
    const errorsList = errors?.map((error, idx) => <li key={idx} style={{color: 'red'}}>{error}</li>)


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
    body: JSON.stringify({ topic: topic }), 
  })
    .then((r) => r.json())
    .then((data) => {
        if(data.errors) {
            setErrors(data.errors)
        } else{ 
            handleAddTopic(data);
            navigate("/");
        }
    });

  setTopic(""); 
};


    return (

        <div className="NewTopic" >
            {errorsList}
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