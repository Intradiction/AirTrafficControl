import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import atcLogo from './assets/air-traffic-controller_512.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={atcLogo} className="logo" alt="Vite logo" />
      </div>
      <h1>Air Traffic Control</h1>
    </>
  )
}

export default App
