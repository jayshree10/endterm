import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = ({user}) => {
  const navigate = useNavigate()


  useEffect(() => {
    const userValueFromLocal = JSON.parse(localStorage.getItem('user'))
    if (userValueFromLocal?.email === "email@gmail.com" && userValueFromLocal?.password === "123456") {
      navigate("/")
    }
    else {
      navigate("./login")
    }
  }, [user])

  return (
    <>
    <h1 className='title'>Findtutor.com</h1>
    <ul className='Nav'>
      <li>
          <Link to='/'>Home</Link>
      </li>
      <li>
          <Link to='/about'>About</Link>
      </li>
      <li>
          <Link to='/profile'>Profile</Link>
      </li>
    </ul>
    </>
    
  );
}

export default Header