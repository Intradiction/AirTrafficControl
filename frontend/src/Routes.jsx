import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Gates } from './pages/Gates';
import { Test } from './pages/test';

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Test></Test> }/>
                <Route exact path="/gates" element={ <Gates></Gates>}/>
                
            </Routes>
        </Router>
    )
}

export default Routers;