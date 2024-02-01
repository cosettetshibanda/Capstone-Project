import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";



const UsersContext = createContext({});

const UsersProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false)
    const [users, setUsers] = useState([])
    const navigate = useNavigate()
  


    useEffect(() => {
      fetch("/me")
      .then(response => response.json())
      .then(data => {
        if(!data.errors){
            loginUser(data)
        }
      })
    }, [])

    const loadUsers = () => {
      if(loggedIn) {
          fetch("/users")
          .then(r => r.json())
          .then(data => setUsers(data))
      }
  } 
  
  useEffect(loadUsers, [loggedIn, navigate])


    const loginUser = (user) => {
      setCurrentUser(user)
      setLoggedIn(true)
        
      };
       
      const logoutUser = () => {
        setCurrentUser({});
        setLoggedIn(false);
      };
      

    //   const addCarSeat = (carseat) => {
    //     setCurrentUser((prevState) => ({...prevState, carseats: [carseat, ...currentUser.carseats]}))
    //   }

      const addUserQuestion = (newQuestion) => {
        setCurrentUser((prevState) => ({...prevState, questions: [...currentUser.questions, newQuestion]}))
      }

  
      const deleteUserQuestion = (deletedQuestion) => {
        const editedQuestions = currentUser.questions.filter((question) => question.id !== deletedQuestion.id)
        setCurrentUser((prevState) => ({...prevState, questions: editedQuestions}))
      }

     

      const updateUserQuestion = (updatedQuestion) => {
        const updatedQuestions = currentUser.questions.map((question) => {
          if(question.id === updatedQuestion.id) {
            return updatedQuestion
          } else {
            return question
          }
        })
        setCurrentUser(prevState => ({...prevState, questions: updatedQuestions}))
      }

      const addUserAnswer = (newAnswer) => {
        setCurrentUser((prevState) => ({...prevState, answers: [...currentUser.answers, newAnswer]}))
      }
    
  

  
      return(
          <UsersContext.Provider value={{ users, addUserAnswer, deleteUserQuestion, updateUserQuestion, addUserQuestion, loginUser, logoutUser, loggedIn, currentUser, setCurrentUser }}>{ children }</UsersContext.Provider>
      )
  
   }
  
  
  
  export { UsersContext, UsersProvider }
    