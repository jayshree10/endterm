import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './Pages/About';
import Home from './Pages/Home';
import Notfound from './Pages/Notfound';
import Profile from './Pages/Profile';
// import { Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import JSONDATA from './mock_data.json';

const App = () => {
  
    const [user, setUser] =  useState({email: "",password: ""}); // state is an individual temporray storage of a component
    const [error, setError] = useState("")

  //json

  return (
    <Router>
      {/* header is a component which would be presesnt in all routes... so we can handle auth in this */}
    <div className="App">
      <Header user={user}/> 
      <div className="App">

    </div>
    </div>
    <Routes>
     <Route path='/' element={<Home setUser = {setUser} user={user}/>} exact/>   {/* this is a protected route means it checks for credentials everytime it opens*/}
      <Route path="/login" element={<LoginForm  setUser = {setUser} user={user} error={error}/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profile" element={<Profile/>}/>


      <Route path="*" element={<Notfound/>}/>
    </Routes>
    </Router>
  );
}

export default App;
