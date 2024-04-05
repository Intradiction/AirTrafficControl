import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Gates } from './pages/Gates';
import { Test } from './pages/test';
import { Login } from './pages/AddPlane';
import { FlightInfoPage } from './pages/FlightInfoPage';

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={ <Gates></Gates>}/>
                <Route exact path="/add" element={<Login></Login>} />
            </Routes>
        </Router>
    )
}

export default Routers;