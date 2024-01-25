import { TopicContext } from "../../Context/TopicContext"

function TopicForm(){
    const {handleAddTopic} = useContext(TopicContext)

    const history = useHistory()
    const [topic, setTopic] = useState("")


    const handleChange = (e) => {
        setTopic({
            ...topic,
            [e.target.name] :e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newTopic = {
            ...topic
        }
    
        fetch ("/topics", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTopic)
        })
        .then(r => r.json())
        .then(data => {

            handleAddTopic(data)
            history.push("/");
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
                    name="name" 
                    placeholder="Category name" />
                <button 
                    type="submit"
                    >Add Topic</button>
            </form>
        </div>
    )
}
export default TopicForm