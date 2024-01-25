import { TopicContext } from "../../Context/TopicContext";
import { UsersContext } from "../../Context/UsersContext";
import Topic from "./Topic";


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
        <Topic
            key={topic.id}
            category={topic}
        />
    
    ));
    return (
        <div id="topic-list">{topicItems}</div>
    )
}

export default TopicList