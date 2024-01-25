import { useContext } from "react";
import { UsersContext } from "../Context/UsersContext";



const Home = () => {
  const {loggedIn, currentUser } = useContext(UsersContext);


  return (
    <div className='home'>{ loggedIn ? <h3>Welcome {currentUser.username}! </h3> : <h3>Login or Signup To Get Started!</h3>}</div>
  )
}

export default Home