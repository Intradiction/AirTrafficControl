import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Gates } from './pages/Gates';

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={ <Gates></Gates>}>
                </Route>
            </Routes>
        </Router>
    )
}

export default Routers;