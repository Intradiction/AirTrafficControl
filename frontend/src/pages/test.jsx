import { useState } from 'react'
import axios from 'axios';
import atcLogo from '../assets/air-traffic-controller_512.png'
import { useNavigate } from 'react-router-dom'
import './test.css'

export const Test = () => {
    const history = useNavigate();
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

    const goToGates = (e) => {
        e.preventDefault();
        let url = "/gates"

        history({
            pathname: url,
            state: {}
        });
    };

    return (
        <>
            <div className='flex justify-center-center items-center'>
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
            )}
        </>
    )
}

export default Test