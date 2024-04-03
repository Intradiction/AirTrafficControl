import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Gates } from './pages/Gates';
import { Test } from './pages/test';
import { Login } from './pages/Login';
import { FlightInfoPage } from './pages/FlightInfoPage';

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Test></Test> }/>
                <Route exact path="/gates" element={ <Gates></Gates>}/>
                <Route exact path="/login" element={<Login></Login>} />
                <Route exact path='/info' element={<FlightInfoPage/>}></Route>
            </Routes>
        </Router>
    )
}

export default Routers;