import './App.css';
import Home from './pages/Home';
import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/dashboard';
import Reset from './pages/Reset';

function App() {
  const [email,setEmail] =useState('')
    const [password,setPassword]=useState('')
    const [name, setName] = useState("");
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/signin' element={<SigninPage
          email ={email}
          setEmail ={setEmail}
          password ={password}
          setPassword ={setPassword}/>} />
        <Route path='/signup' element ={<SignupPage 
          email ={email}
          setEmail ={setEmail}
          password ={password}
          setPassword ={setPassword}
          name={name}
          setName={setName}
        />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/reset' element={<Reset 
          email ={email}
          setEmail ={setEmail}
        />} />
      </Routes>
    </Router>
  );
}

export default App;
