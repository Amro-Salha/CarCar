import React, { useEffect, useState } from 'react';

function AppointmentList () {

    const [appointments, setAppointments] = useState([])
    const [vins, setVins] = useState([])

    const getData = async () => {
        const res = await fetch('http://localhost:8080/api/services/')

        if (res.ok) {
            const data = await res.json()
            setAppointments(data.services)
        }

        const response = await fetch('http://localhost:8100/api/automobiles/')

        if (response.ok) {
            const data = await response.json()
            setVins(data.autos)
        }
    }

    useEffect( () => {
        getData()
    }, [])

    const handleDelete = async (e) => {
        const appointmentUrl = `http://localhost:8080/api/services/${e.target.id}/`

        const fetchConfigs = {
            method: "Delete",
            headers: {
                "Content-Type": "application/json"
            }
        }

        const response = await fetch(appointmentUrl, fetchConfigs)
        getData()
    }


    return (
        <table className="table table-striped">
        <thead>
            <tr>
            <th>VIN</th>
            <th>Customer name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Technician</th>
            <th>Reason</th>
            <th>Purchased from Dealership</th>
            </tr>
        </thead>
        <tbody>
            {appointments.map(appointment => {
                let formatedDate = new Date(appointment.service_date).toLocaleDateString()
                let formatedTime = new Date(appointment.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})

                if (formatedTime[0] == 0) {
                    formatedTime = formatedTime.replace('0', '')
                }

                let vip = "No"
                for (let property of vins) {
                    if (appointment.vin === property.vin) {
                        vip = "Yes"
                    }
                }


            return (
                <tr key={appointment.id}>
                <td>{ appointment.vin }</td>
                <td>{ appointment.name }</td>
                <td>{ formatedDate }</td>
                <td>{ formatedTime }</td>
                <td>{ appointment.technician.technician_name }</td>
                <td>{ appointment.reason }</td>
                <td>{ vip }</td>
                <td><button onClick={handleDelete} id={appointment.id} className="btn btn-danger">Cancel</button><button onClick={handleDelete} id={appointment.id} className="btn btn-success">Finished</button></td>
                </tr>
            );
            })}
        </tbody>
        </table>
)}

export default AppointmentList
