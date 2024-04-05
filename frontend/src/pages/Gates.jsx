import Navbar from '../components/navbar';
import './Gates.css';
import placeholder from '../assets/placeholder.png'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export const Gates = () => {

    const history = useNavigate();
    const [gateList, setGateList] = useState();
    const [runwayList, setRunwayList] = useState();

    useEffect(() => {
        getGateList()
        getRunwayList()
        updateTable("gateTable", gateList)
        updateTable("runwayTable", runwayList)
        
    },[])

    function updateTable(tableID, set) {
        //update gates values
        //get gates from backend
        var table = document.getElementById(tableID).getElementsByTagName('tbody')[0];
        var count = 0
        if (set) {
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

    function getRunwayList() {
        //setRunwayList()
    }

    function getGateList() {
        //setGateList()
    }


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
                        <div className="text">Runways</div>
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
                            <tbody>
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