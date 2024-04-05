import { useEffect, useState } from 'react'
import axios from 'axios';
import useWebSocket from 'react-use-websocket'
import atcLogo from '../assets/air-traffic-controller_512.png'
import { useNavigate } from 'react-router-dom'
import './test.css'

export const Test = () => {
    let testAirplaneCount = 1;

    const history = useNavigate();
    const [testInput, setTestInput] = useState("");
    const [serverResponse, setServerResponse] = useState("");

    // Setup ws connection
    const { sendJsonMessage } = useWebSocket(
        `ws://localhost:8000/ws`,
        {
            onMessage: (e) => {
                const dataObj = JSON.parse(e.data);
                console.log(dataObj)
            }
        }
    );

    // Handle component on load
    useEffect(() => {
        sendJsonMessage({
            request: 'move'
          });
    }, [])

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

    const goToGates = (e) => {
        e.preventDefault();
        let url = "/gates"

        history({
            pathname: url,
            state: {}
        });
    };

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
        <>
            {/* <div className='flex justify-center-center items-center'>
                <img src={atcLogo} className="logo mx-auto content-center" alt="Vite logo" />
            </div>
            <h1>Air Traffic Control</h1>
            <div className='m-4'>
                Input an airplane ID:
                <input value={testInput} onChange={e => setTestInput(e.target.value)} />
                <button className='m-3 p-3 border-neutral-200' onClick={handleGetAck} >Get acknowledgement from backend</button>
                <button className='m-3 p-3 border-neutral-200' onClick={goToGates}>Go to Next Page</button>
            </div>

            {serverResponse ? (
                <div>{serverResponse}</div>
            ) : (
                <div>Awaiting Server Response...</div>
            )} */}

            <button onClick={handleAddAirplane}>Add Airplane</button>
        </>
    )
}

export default Test