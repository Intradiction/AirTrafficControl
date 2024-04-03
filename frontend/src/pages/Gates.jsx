import Navbar from '../components/navbar';
import './Gates.css';
import placeholder from '../assets/placeholder.png'

export const Gates = () => {
 

    return (
        <div className="gates-container">
            <link rel="preconnect" href="https://rsms.me/" />
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            <Navbar className="navbar" title={"Gates and Runways - LGA"} />

            <div className="body-container">
                <div className="info-container">
                    <div className="table-container">
                        <div className="text">Gates</div>
                        <div className ="line"></div>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Gate No.</th>
                                    <th>Status</th>
                                    <th>In Use</th>
                                    <th>Time to Clear</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="table-container">
                        <div className="text">Runways</div>
                        <div className="line"></div>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Gate No.</th>
                                    <th>Status</th>
                                    <th>In Use</th>
                                    <th>Time to Clear</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="image-container">
                    <img src={placeholder} className="image"></img>
                </div>
            </div>

    </div>
  );
};