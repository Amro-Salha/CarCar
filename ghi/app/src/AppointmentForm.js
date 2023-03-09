import React, { useEffect, useState } from 'react';

function AppointmentForm () {
    const [technicians, setTechnicians] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        time: "",
        service_date: "",
        reason: "",
        technician: "",
        vin: "",
    })


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }


    const fetchData = async () => {
        const url = 'http://localhost:8080/api/services/tech/';
        const response = await fetch(url)
        if(response.ok) {
            const data = await response.json()
            setTechnicians(data.tech)
            }
        }


    const handleSubmit = async (event) => {
        event.preventDefault();

        let newtime = formData.time
        const [hours, minutes] = newtime.split(':');
        const date = new Date(0, 0, 0, hours, minutes, 0);
        const isoDate = date.toISOString();
        formData.time = isoDate

        const appointmentUrl = 'http://localhost:8080/api/services/';
            const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
            };
            const response = await fetch(appointmentUrl, fetchConfig);
            if (response.ok) {
                setFormData({
                    name: "",
                    time: "",
                    service_date: "",
                    reason: "",
                    technician: "",
                    vin: "",
                })
            }
        };

    useEffect(() => {
        fetchData();
      }, []);


    return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create an Appointment</h1>
                <form onSubmit={handleSubmit} id="create-appointment-form">
                    <div className="form-floating mb-3">
                        <input onChange={handleChange} value={formData.name} placeholder="name" required type="text" name="name" id="name" className="form-control"></input>
                        <label htmlFor="name">Your Full Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleChange} type="date" value={formData.service_date} id="service_date" name="service_date" className="form-control"></input>
                        <label htmlFor="service_date">Choose a date</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleChange} type="time" value={formData.time} id="time" name="time" className="form-control"></input>
                        <label htmlFor="time">Choose a Time</label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="reason" className="form-label">Reason for Service</label>
                        <textarea onChange={handleChange} value={formData.reason} required type="text" className="form-control" name="reason" id="reason" rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <select onChange={handleChange} value={formData.technician} required id="technician" className="form-select" name="technician">
                        <option value="">Select a Technician</option>
                        {technicians.map(technician => {
                                    return (
                                    <option key={technician.id} value={technician.id}>
                                        {technician.technician_name}
                                    </option>
                                    );
                            })}
                        </select>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleChange} value={formData.vin} placeholder="vin" required type="text" name="vin" id="vin" className="form-control"></input>
                        <label htmlFor="vin">VIN</label>
                    </div>
                    <button className="btn btn-primary">Create</button>
                </form>
                </div>
            </div>
        </div>
    )};

export default AppointmentForm;
