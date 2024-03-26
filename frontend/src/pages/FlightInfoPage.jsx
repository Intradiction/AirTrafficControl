import Navbar from '../components/navbar';
import './FlightInfoPage.css';
import placeholder from '../assets/placeholder.png'

export const FlightInfoPage = () => {
 

    return (
        <div className="gates-container">
            <link rel="preconnect" href="https://rsms.me/" />
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            <Navbar className="navbar" title={"AC1722|YYZ - LGA"} />

            <div className="body-container">
                <div className="info-container">
                    <div className="info-column">
                        <div className="info-section">
                            <div className="info-text">Clearance</div>
                            <div className="line"></div>
                            <grid className="grid grid-cols-2">

                                <div className="grid-text">Airport:</div>
                                <div className="grid-text">LGA</div>
                            </grid>
                            <grid className="grid grid-cols-2">
                                <div className="grid-text">Runway:</div>
                                <div className="grid-text">N2</div>
                                <div className="grid-text">Status:</div>
                                <div className="grid-text">Clear</div>
                            </grid>
                            <grid className="grid grid-cols-2">
                                <div className="grid-text">Gate:</div>
                                <div className="grid-text">C3</div>
                            </grid>

                        </div>
                        <div className="info-section">
                            <div className="info-text">Previous Communications</div>
                            <div className="line"></div>
                            <grid className="grid grid-cols-2">

                                <div className="grid-text">Control:</div>
                                <div className="grid-text">Maintain Current Altitude</div>
                            </grid>
                            <grid className="grid grid-cols-2">
                                <div className="grid-text">AC1722:</div>
                                <div className="grid-text">Affirmative</div>
                            </grid>
                       
                        </div>
                        <div className="info-section">
                            <div className="info-text">Weather</div>
                            <div className="line"></div>
                            <grid className="grid grid-cols-2">

                                <div className="grid-text">Wind:</div>
                                <div className="grid-text">27 mph NW</div>
                                <div className="grid-text">Visibility</div>
                                <div className="grid-text">Low</div>
                                <div className="grid-text">Cloud Ceiling:</div>
                                <div className="grid-text">6,500 ft</div>
                                <div className="grid-text">Rain:</div>
                                <div className="grid-text">Expected</div>
                            </grid>
                           
                            </div>
                    </div>
                </div>
                <div className="image-container">
                    <img src={placeholder} className="image"></img>
                </div>
            </div>

    </div>
  );
};