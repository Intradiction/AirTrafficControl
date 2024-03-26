import logo from '../assets/air-traffic-controller_512.png';
import bg from '../assets/Planebg.jpg';

import React, { useState, useEffect } from 'react';
import './Login.css';

export const Login = () => {
 

    return (
        <div className="bg" style={{
            backgroundImage: `url(${bg})`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',height: '100vh'
          }}>
            <div className="login-container" style={{ backgroundColor: `white` }}>
              <img src={logo} alt="Logo" />
              <h1 style={{color: '#1b2c59'}} >Login</h1>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    //value={}
                    placeholder="Username"
                    //onChange={setInput}
                    required
                    className="input-style-3"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    //value={loginInfo.password}
                    placeholder="Password"
                    //onChange={setInput}
                    required
                    className="input-style-3"
                  />
                </div>
                <br></br>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#5c84a6',
                    borderRadius: '15px',
                    fontSize: '1.2rem',    // Increase the font size
                    width: '50%',          // Set the width to 50% of its container
                    padding: '10px 20px',  // Add padding to control the button size
                  }}>Login
                </button>
              </form>
              <div>
                <br></br>
                <br></br>
              </div>
              <div>
                <br></br>
              </div>
            </div>
          </div>
        );
      }