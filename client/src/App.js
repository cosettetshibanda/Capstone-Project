import './App.css';
import NavBar from './Components/NavBar';
import { UsersProvider } from './Context/UsersContext';
import Login from './Components/Login';
import SignUpForm from './Components/SignUpForm';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';


function App() {
  return (
   <main>
    <UsersProvider >
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpForm />} /> 
        <Route path="/login" element={<Login/>} />
      </Routes>
    </UsersProvider>
   </main>
  );
}

export default App;
