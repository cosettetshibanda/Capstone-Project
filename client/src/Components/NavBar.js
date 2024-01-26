import { Link,} from "react-router-dom";

import { useContext } from "react"
import { UsersContext } from "../Context/UsersContext";
import TopicList from "./Topics/TopicList";
import TopicForm from "./Topics/TopicForm";



function NavBar() {

    const {loggedIn, logoutUser} = useContext(UsersContext)

    const handleLogoutClick = () => {
        fetch("/logout", {method: "DELETE"})
        .then((r) => logoutUser())
    }

    const loggedInLinks = () => {
        return(
          <>
            {/* <li><Link to="/carseats">Car Seats</Link></li>
            <li><Link to="/carseats/new">Add Car Seat</Link></li>
            <li><Link to="mycarseats">My Car Seats</Link></li>  */}
            <li><Link to="#" onClick={handleLogoutClick}>Logout</Link></li>
            <TopicForm />
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