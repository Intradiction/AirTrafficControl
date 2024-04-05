/* eslint-disable react/prop-types */
// Navbar.js
import logo from '../assets/air-traffic-controller_512.png';
import './navbar.css';

function Navbar({ title }) {
    setInterval(showTime, 1000);
    function showTime() {
        // Getting current time and date
        let time = new Date();
        let hour = time.getHours();
        let min = time.getMinutes();
        let am_pm = "AM";

        // Setting time for 12 Hrs format
        if (hour >= 12) {
            if (hour > 12) hour -= 12;
            am_pm = "PM";
        } else if (hour == 0) {
            hour = 12;
            am_pm = "AM";
        }

        hour =
            hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;

        let currentTime =
            hour +
            ":" +
            min +
            am_pm;

        // Displaying the time
        document.getElementById(
            "clock"
        ).innerHTML = currentTime;
    }

    return (

        <div className="nav-container">
            <link rel="preconnect" href="https://rsms.me/" />
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '3vw' }}>
                <img src={logo} alt="Logo" className="img" />
                <p className="title">{title}</p>
            </div>
            <div className="links-container">
                <p className="link-text">Add Flights</p>
                <p className="link-text">Dashboard</p>
            </div>
            <div className="clock">
                <p className="text" id="clock"></p>
            </div>

        </div>
    );
}

export default Navbar;