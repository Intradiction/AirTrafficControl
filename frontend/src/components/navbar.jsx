/* eslint-disable react/prop-types */
// Navbar.js
import './navbar.css';

function Navbar({title}) {

    return (

        <div className="nav-container">
            <link rel="preconnect" href="https://rsms.me/" />
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
                <p className="title">{title}</p>
            <div className="links-container">
                <p className="link-text">Flights</p>
                <p className="link-text">Gates</p>
                <p className="link-text">Runways</p>
            </div>
            <div className="clock">
                <p className="text">1:43:52 PM</p>
            </div>

        </div>
    );
}

export default Navbar;