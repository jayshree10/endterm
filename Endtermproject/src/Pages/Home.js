// import React from 'react'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import '../App.css';
import JSONDATA from '../mock_data.json';

const Home = ({ setUser, user }) => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState(' ')

  const Logout = () => {
    setUser({ password: "", email: "" });
    localStorage.clear()
  }

  useEffect(() => { // useEffect is a hook that runs the piece of code that is written inside it everytime the dependency array is changed
    const userValueFromLocal = JSON.parse(localStorage.getItem('user'))
    console.log(userValueFromLocal)
    if (userValueFromLocal?.email === "email@gmail.com" && userValueFromLocal?.password === "123456") {
      return
    }
    else {
      navigate("./login")
    }
  }, []) // [] this here is a dependency array if empty it will run once in the starting only

  return <div>
    <h1>Home</h1>
    <div className='logout'>
        <button onClick={Logout}>Logout</button>
      </div>
    <div className="welcome" >

      {/* <input className="se" type="text" placeholder="Search..."></input> */}
      <div className="form-outline mb-4">

        <input type="search" className="form-control" id="datatable-search-input" placeholder="Search..." onChange={event => { setSearchTerm(event.target.value) }} />

      </div>
      <div id="datatable">
      </div>
      {/* {JSONDATA.map((val,key)=>{
        return <div className="json-data-files"><img src={val.img}/>{<br/>}{val.first_name}{" "}{val.last_name}<br/>{"Subject"}{":"}{val.subject}{<br/>}{"E-mail"}{":"}{val.email}{<br/>}{<br/>}{<hr/>}</div>
      })} */}
      {JSONDATA.filter((val) => {
        if (searchTerm == "") {
          return val
        }
        else if (val.subject.toLowerCase().includes(searchTerm.toLowerCase()) || val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return <div className="json-data-files" >
            <p>
              <img src={val.img} />{<br />}{val.first_name}{" "}{val.last_name}<br />{"Subject"}{":"}{val.subject}{<br />}{"E-mail"}{":"}{val.email}{"  "}{<div><button>Select Tutor</button></div>}{<br />}{<br />}{<hr />}
            </p></div>
        }
      }).map((val, key) => {
        return <div className="json-data-files" key={key}>
          <p>
            <img src={val.img} />{<br />}{val.first_name}{" "}{val.last_name}<br />{"Subject"}{":"}{val.subject}{<br />}{"E-mail"}{":"}{val.email}{"  "}{<div><button>Select Tutor</button></div>}{<br />}{<br />}{<hr />}
          </p></div>
      })}      
     
    </div>
  </div>
};

export default Home;