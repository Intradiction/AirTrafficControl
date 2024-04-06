import Navbar from '../components/navbar';
import bg from '../assets/Planebg.jpg';
import './Gates.css';
import placeholder from '../assets/placeholder.png'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { getFirestore, doc, setDoc, onSnapshot } from 'firebase/firestore'
import { firebaseConfig } from '../config/config';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


export const Gates = () => {

    const history = useNavigate();
    const [gateList, setGateList] = useState();
    const [runwayList, setRunwayList] = useState();
    const [distantList, setDistantList] = useState();
    const [overheadList, setOverheadList] = useState();

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);


    useEffect(() => {
        setTimeout(function () {
            onSnapshot(doc(db, "AirplaneQueues", "distant"), (doc) => {
                getList("distant", "distantTable", distantList)
            });
            onSnapshot(doc(db, "AirplaneQueues", "overhead"), (doc) => {
                getList("overhead", "overheadTable", overheadList)
            });
            onSnapshot(doc(db, "AirplaneQueues", "runway1"), (doc) => {
                getList("runway", "runwayTable", runwayList)
            });
            onSnapshot(doc(db, "AirplaneQueues", "gate1"), (doc) => {
                getList("gate", "gateTable", gateList)
            });
        }, 10)

    },[])

    function getList(path, tableID, set) {
        try {
            axios.get(`http://127.0.0.1:8000/` + path)
                .then((res) => {
                    switch (tableID) {
                        case "runwayTable":
                            setRunwayList(res.data)
                            updateTable(tableID, res.data)
                            break
                        case "gateTable":
                            setGateList(res.data)
                            updateTable(tableID, res.data)
                            break
                        case "distantTable":
                            setDistantList(res.data)

                            updateTable(tableID, res.data)
                            break
                        case "overheadTable":
                            setOverheadList(res.data)

                            updateTable(tableID, res.data)
                            break
                    }


                })
                .catch((error) => {
                    console.error(error);
                });
        }
        catch (error) {
            console.error("Server not connected")
        }

        updateTable(tableID, set)

    }
    function updateTable(tableID, set) {
        //update gates values
        //get gates from backend
        try {
            var table = document.getElementById(tableID).getElementsByTagName('tbody')[0];
            table.innerHTML = ""
        
            var count = 0
            if (set && set.length > 0) {
                const gates = set
                for (const gate in gates) {
                
                    var row = table.insertRow(count)
                    var id = row.insertCell(0);
                    var pilot = row.insertCell(1);
                    var planeType = row.insertCell(2);
                    var capacity = row.insertCell(3);

                    id.innerHTML = gates[gate].id
                    pilot.innerHTML = gates[gate].pilot_id
                    planeType.innerHTML = gates[gate].type
                    capacity.innerHTML = gates[gate].capacity
                    count++
                }
            }
            for (count; count < 5; count++) {
                var newrow = table.insertRow(count)
                newrow.insertCell(0);
                newrow.insertCell(1);
                newrow.insertCell(2);
                newrow.insertCell(3);
            }
        } catch (error) { console.log("Can't find tbody") }
    }

    return (
        <div className="bg" style={{
            backgroundImage: `url("${bg}")`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',height: '100vh'
          }}>
        <div className="gates-container">
            <link rel="preconnect" href="https://rsms.me/" />
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            <Navbar className="navbar" title={"Dashboard - LGA"} />

            <div className="body-container">
                <div className="info-container">
                    <div className="table-container">
                        <div className="text">Gates</div>
                        <div className ="line"></div>
                        <table id="gateTable">
                            <thead>
                                <tr>
                                    <th>Flight ID</th>
                                    <th>Pilot ID</th>
                                    <th>Type</th>
                                    <th>Capacity</th>
                                </tr>
                            </thead>
                            <tbody >
                            </tbody>
                        </table>
                    </div>
                    <div className="table-container">
                        <div className="text">Overhead Airspace</div>
                        <div className="line"></div>
                        <table id="overheadTable">
                            <thead>
                                <tr>
                                    <th>Flight ID</th>
                                    <th>Pilot ID</th>
                                    <th>Type</th>
                                    <th>Capacity</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="info-container">
                    <div className="table-container">
                        <div className="text">Runway</div>
                        <div className="line"></div>
                        <table id="runwayTable">
                            <thead>
                                <tr>
                                    <th>Flight ID</th>
                                    <th>Pilot ID</th>
                                    <th>Type</th>
                                    <th>Capacity</th>
                                </tr>
                            </thead>
                            <tbody >
                            </tbody>
                        </table>
                    </div>
                    <div className="table-container">
                        <div className="text">Distant Airspace</div>
                        <div className="line"></div>
                        <table id="distantTable">
                            <thead>
                                <tr>
                                    <th>Flight ID</th>
                                    <th>Pilot ID</th>
                                    <th>Type</th>
                                    <th>Capacity</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

    </div>
    </div>
  );
};