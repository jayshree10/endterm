// import React from 'react'

const Profile = () => {
  return (
      <>
          <div className="contact">
          <h1>Contact Us</h1>
          
          <div className="form-group">
          <label htmlFor="name">Name:    </label>
          <input type="text" name="text" id="" placeholder="name" />
        </div>
          <div className="form-group">
          <label htmlFor="email">Email:    </label>
          <input type="email" name="email" id="email" placeholder="email" />
        </div>
          <div className="form-group">
          <label htmlFor="text">Message:    </label>
          <input type="text" name="text" placeholder="write a message" />
        </div>  
          </div>
          
      </>
  )
};

export default Profile;