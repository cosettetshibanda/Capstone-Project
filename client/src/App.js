import './App.css';
import NavBar from './Components/NavBar';
import { UsersProvider } from './Context/UsersContext';
import Login from './Components/Login';
import SignUpForm from './Components/SignUpForm';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import { TopicProvider } from './Context/TopicContext';
import TopicCard from './Components/Topics/TopicCard';
import AnswerForm from './Components/Answers/AnswerForm';


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
          <Route path="/topic/:topic_id" element={<TopicCard />} />
          <Route path="/add-answers/:question_id" element={<AnswerForm />} />
          <Route path="/view-answers/:question_id" element={<TopicCard />} />
        </Routes>
      </TopicProvider>
    </UsersProvider>
   </main>
  );
}

export default App;
