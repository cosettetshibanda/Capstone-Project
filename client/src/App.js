import './App.css';
import NavBar from './Components/NavBar';
import { UsersProvider } from './Context/UsersContext';
import Login from './Components/Login';
import SignUpForm from './Components/SignUpForm';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import { TopicProvider } from './Context/TopicContext';


function App() {
  return (
   <main>
    <UsersProvider >
      <TopicProvider >
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpForm />} /> 
          <Route path="/login" element={<Login/>} />
        </Routes>
      </TopicProvider>
    </UsersProvider>
   </main>
  );
}

export default App;
