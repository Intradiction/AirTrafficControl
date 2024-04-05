import Navbar from '../components/navbar';
import bg from '../assets/Planebg.jpg';
import './Gates.css';
import placeholder from '../assets/placeholder.png'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export const Gates = () => {

    const history = useNavigate();
    const [gateList, setGateList] = useState();
    const [runwayList, setRunwayList] = useState();
    const [distantList, setDistantList] = useState();
    const [overheadList, setOverheadList] = useState();



    useEffect(() => {
        setTimeout(function () {
            console.log("Updating")
            getList("gate", "gateTable", gateList)
            getList("runway", "runwayTable", runwayList)
            getList("overhead", "overheadTable", overheadList)
            getList("distant", "distantTable", distantList)
        }, 1)
    },[])

    function getList(path, tableID, set) {
        try {
            axios.get(`http://127.0.0.1:8000/` + path)
                .then((res) => {
                    console.log('Received response with runway data:')
                    console.log(res.data);
                    switch (tableID) {
                        case "runwayTable":
                            setRunwayList(res.data)
                            break
                        case "gateTable":
                            setGateList(res.data)
                            break
                        case "distantTable":
                            setDistantList(res.data)
                            break
                        case "overheadTable":
                            setOverheadList(res.data)
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
        var table = document.getElementById(tableID).getElementsByTagName('tbody')[0];
        table.innerHTML = ""
        var count = 0
        if (set && set.length > 0) {
            const gates = JSON.parse(set)
            for (const gate in gates) {
                var row = table.insertRow(count)
                var num = row.insertCell(0);
                var status = row.insertCell(1);
                var inUse = row.insertCell(2);
                var timeClear = row.insertCell(3);

                num.innerHTML = gates[gate].gateNo
                status.innerHTML = gates[gate].status
                inUse.innerHTML = gates[gate].inUse
                timeClear.innerHTML = gates[gate].timeClear
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
                                    <th>Gate No.</th>
                                    <th>Status</th>
                                    <th>In Use</th>
                                    <th>Time to Clear</th>
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
                                    <th>Gate No.</th>
                                    <th>Status</th>
                                    <th>In Use</th>
                                    <th>Time to Clear</th>
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
                                    <th>Gate No.</th>
                                    <th>Status</th>
                                    <th>In Use</th>
                                    <th>Time to Clear</th>
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
                                    <th>Gate No.</th>
                                    <th>Status</th>
                                    <th>In Use</th>
                                    <th>Time to Clear</th>
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