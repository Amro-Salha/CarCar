import React, { useEffect, useState } from 'react';

function AppointmentList () {

    const [appointments, setAppointments] = useState([])

    const getData = async () => {
        const res = await fetch('http://localhost:8080/api/services/')

        if (res.ok) {
            const data = await res.json()
            setAppointments(data.services)
        }
    }

    useEffect( () => {
        getData()
    }, [])

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
            </tr>
        </thead>
        <tbody >
            {appointments.map(appointment => {
            return (
                <tr key={appointment.href}>
                <td>{ appointment.name }</td>
                <td>{ appointment.service_date }</td>
                <td>{ appointment.reason }</td>
                </tr>
            );
            })}
        </tbody>
        </table>
)}

export default AppointmentList
{/* <td>{ appointment.conference }</td>
<td>{ appointment.name }</td>
<td>{ appointment.conference }</td> */}
