import { Link,} from "react-router-dom";

import { useContext } from "react"
import { UsersContext } from "../Context/UsersContext";
import TopicList from "./Topics/TopicList";
import TopicForm from "./Topics/TopicForm";




function NavBar() {
  
  const {loggedIn, logoutUser, currentUser} = useContext(UsersContext)
  const sluggifyUsername = (username) => {
    if (username) {
      return username.replace(/\s+/g, "-").toLowerCase();
    }
    return "";
  };
  


    const handleLogoutClick = () => {
        fetch("/logout", {method: "DELETE"})
        .then((r) => logoutUser())
    }

    const loggedInLinks = () => {
      const sluggedUsername = sluggifyUsername(currentUser.username);

        return(
          <>
            <li><Link to="#" onClick={handleLogoutClick}>Logout</Link></li>
            <br></br>
            <TopicForm />
            <br></br>
            <p className="personalLinks">
              <Link to="/questions" >All Questions</Link>
              <Link to={`/${sluggedUsername}/questions`}>My Questions</Link>
              </p>
            <br></br>
            <TopicList />

          </>
        )
      }
    
      const loggedOutLinks = () => {
        return(
            <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
            </>
        )
      }
    


    return (
        <div>
            <h1>It Takes a Village!</h1>
            <p>
              Being a parent is wonderful but it is also extremely difficult. Every child is different and needs something special. We need each other to learn and give our best to our children. Come make a connection with other parents, get answers to questions, and help other parents.
            </p>
            <ul>
          { loggedIn ? loggedInLinks() : loggedOutLinks() }
        </ul>
        </div>

    )
}

export default NavBar