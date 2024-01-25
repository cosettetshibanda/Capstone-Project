import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import { UsersProvider } from './Context/UsersContext';
import Login from './Components/Login';
import SignUpForm from './Components/SignUpForm';

function App() {
  return (
   <main>
    <UsersProvider >
      <NavBar />
      <Routes>
        <Route path="/signup" element={<SignUpForm />} /> 
        <Route path="/login" element={<Login/>} />
      </Routes>
    </UsersProvider>
   </main>
  );
}

export default App;
