import { createContext, useContext, useEffect, useState } from "react";
import { UsersContext } from "./UsersContext";
import { useNavigate } from "react-router-dom";


const TopicContext = createContext(null)

const TopicProvider = ({children}) => {
    const [topics, setTopics] = useState([])
    const {loggedIn} = useContext(UsersContext)
    const navigate = useNavigate()

    const loadTopics = () => {
        if(loggedIn) {
            fetch("/topics")
            .then(r => r.json())
            .then(data => setTopics(data))
        }
    } 
    
    useEffect(loadTopics, [loggedIn, navigate])

    

    const handleAddTopic = (newTopic) => {
        setTopics([...topics, newTopic])
    }



    // function handleDeleteReview(review) {
    //     const carseat = carSeats.find((carseat) => carseat.id === review.carseat_id)
    //     const updatedReviews = carseat.reviews.filter((r) => r.id !==review.id);
    //     const updatedCarseat = carSeats.map((c) => c.id === carseat.id ? {...carseat, reviews: updatedReviews} : c)
      
    //     setCarSeats(updatedCarseat)
    // }



    return(
        <TopicContext.Provider value={{topics, setTopics, handleAddTopic}}>{children}</TopicContext.Provider>
    )
}

export {TopicContext, TopicProvider}