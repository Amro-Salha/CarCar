import React, { useEffect, useState } from 'react';

function ServiceHistory () {

    const [appointments, setAppointments] = useState([])
    const [vin, setVin] = useState("")

    let vinFilter = ""

    const handleChange = (e) => {
        vinFilter = e.target.value
    }


    const getData = async () => {
        const res = await fetch('http://localhost:8080/api/services/')

        if (res.ok) {
            const data = await res.json()
            setAppointments(data.services)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setVin(vinFilter)
    }

    useEffect( () => {
        getData()
    }, [])

    return (
        <>
        <form>
            <table>
                <tbody>
                    <tr>
                        <td><input style={{width:"60vw"}} onChange={handleChange} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control"></input>
                        <label htmlFor="vin"></label></td>
                        <td style={{ padding:0 }} className="form-control"><button onClick={handleSubmit}>Search</button></td>
                    </tr>
                </tbody>
            </table>
        </form>
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
                let formatedDate = new Date(appointment.service_date).toLocaleDateString()
                let formatedTime = new Date(appointment.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                if (formatedTime[0] == 0) {
                    formatedTime = formatedTime.replace('0', '')
                }
                if (appointment.vin === vin) {
            return (
                <tr key={appointment.id}>
                <td>{ appointment.vin }</td>
                <td>{ appointment.name }</td>
                <td>{ formatedDate }</td>
                <td>{ formatedTime }</td>
                <td>{ appointment.technician.technician_name }</td>
                <td>{ appointment.reason }</td>
                </tr>
            )};
            })}
        </tbody>
        </table>
        </>
)}

export default ServiceHistory
