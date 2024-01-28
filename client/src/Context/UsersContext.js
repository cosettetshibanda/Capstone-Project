import React, { useState, useEffect, createContext } from "react";



const UsersContext = createContext({});

const UsersProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false)
  


    useEffect(() => {
      fetch("/me")
      .then(response => response.json())
      .then(data => {
        if(!data.errors){
            loginUser(data)
        }
      })
    }, [])


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
    
  

  
      return(
          <UsersContext.Provider value={{ deleteUserQuestion, updateUserQuestion, addUserQuestion, loginUser, logoutUser, loggedIn, currentUser, setCurrentUser }}>{ children }</UsersContext.Provider>
      )
  
   }
  
  
  
  export { UsersContext, UsersProvider }
    