import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
function LoginForm({ error, user, setUser }) {

  const navigate = useNavigate()

  const [details, setDetails] = useState({ name: "", password: "" });
  const submitHandler = e => {
    e.preventDefault();
    if (details.email === "email@gmail.com" && details.password === "123456") {
      setUser({
        password: details.password,
        email: details.email
      });
      localStorage.setItem('user',JSON.stringify({ //JSON.stringify() makes it easier to store but when you need to get. you need to use JSON.parse()
        password: details.password,
        email: details.email
      }))
      console.log("hi")
    } else {
      console.log("Details dont match");
    }
  }


  // useEffect(() => {
  //   if (user.email === "email@gmail.com" && user.password === "123456") {
  //     navigate("./home")
  //   }
  //   else {
  //     navigate("/")
  //   }
  // }, [user])

  
  return (
    <form onSubmit={submitHandler}>

      <div className="form-inner">
        <h2>Login</h2>
        {(error != "") ? (<div className="error">{error}</div>) : ""}
        <div className="form-group">
          <form name="form1">
            <label htmlFor="name">Name:    </label>
            <select id="name">
              <option value="select"></option>
              <option value="admin">Admin</option>
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>
          </form>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:    </label>
          <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} placeholder="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:    </label>
          <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} placeholder="password" />
        </div>
        <div className='login'>
        <input type="submit" value="LOGIN" />
        </div>
      </div>
      <div className='images'>
        <img src="./Images/home.jpg"></img>
      </div>
    </form>
  )
}

export default LoginForm;