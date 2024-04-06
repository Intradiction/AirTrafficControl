import logo from '../assets/air-traffic-controller_512.png';
import Navbar from '../components/navbar';
import bg from '../assets/Planebg.jpg';

import './AddPlane.css';
import { useEffect, useState } from 'react'
import axios from 'axios';
import useWebSocket from 'react-use-websocket'
import atcLogo from '../assets/air-traffic-controller_512.png'
import { useNavigate } from 'react-router-dom'
import './test.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, setDoc, onSnapshot } from 'firebase/firestore'

export const Login = () => {
    let testAirplaneCount = 1;

    const history = useNavigate();
    const [testInput, setTestInput] = useState("");
    const [serverResponse, setServerResponse] = useState("");
     

    const handleAddAirplane = () => {
        console.log('Adding new plane');
        axios.post(`http://127.0.0.1:8000/airplane/`, null, {params: {
            airplane_id: testAirplaneCount++
        }})
        .then((res) => {
            console.log('Received response with data:')
            console.log(res.data);
            
        })
        .catch((error) => {
            console.error(error);
        });
    }
    return (
        <div className="bg" style={{
            backgroundImage: `url("${bg}")`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',height: '100vh'
          }}>
            <div className="gates-container">
            <link rel="preconnect" href="https://rsms.me/" />
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            <Navbar className="navbar" title={"Add Planes - LGA"} />
            <div>
                <br></br>
                <br></br>
              </div>
            <div className="login-container" style={{ backgroundColor: `rgba(255,255,255,0.8)` }}>
              <img src={logo} alt="Logo" />
              <h1 style={{color: '#1b2c59'}} >Add a New Plane</h1>
              <br></br>
              <button
                onClick={handleAddAirplane}
                style={{
                  backgroundColor: '#5c84a6',
                  borderRadius: '15px',
                  fontSize: '1.2rem',    // Increase the font size
                  width: '70%',          // Set the width to 50% of its container
                  padding: '10px 20px',  // Add padding to control the button size
                }}>Add Airplane
              </button>
              <div>
                <br></br>
                <br></br>
              </div>
              <div>
                <br></br>
              </div>
            </div>
          </div>
          </div>
        );
      }