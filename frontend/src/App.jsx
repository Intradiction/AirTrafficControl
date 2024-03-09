import { useState } from 'react'
import axios from 'axios';
import atcLogo from './assets/air-traffic-controller_512.png'
import './App.css'

function App() {
  const [testInput, setTestInput] = useState("");
  const [serverResponse, setServerResponse] = useState("");

  const handleGetAck = () => {
    console.log('Attempting to GET from backend');
    axios.get(`http://127.0.0.1:8000/airplane/${testInput}`)
      .then((res) => {
        console.log('Received response with data:')
        console.log(res.data);
        setServerResponse(res.data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <div>
        <img src={atcLogo} className="logo" alt="Vite logo" />
      </div>
      <h1>Air Traffic Control</h1>
      <div>
        Input an airplane ID:
        <input value={testInput} onChange={e => setTestInput(e.target.value)}/>
        <button onClick={handleGetAck}>Get acknowledgement from backend</button>
      </div>

      {serverResponse ? (
        <div>{serverResponse}</div>
      ) : (
        <div>Awaiting Server Response...</div>
      )}
    </>
  )
}

export default App
