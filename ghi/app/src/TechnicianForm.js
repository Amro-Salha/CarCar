import React, { useEffect, useState } from 'react';

function TechnicianForm () {
    const [formData, setFormData] = useState({
        technician_name: "",
        employee_number: "",
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (event) => {
        const technicianUrl = 'http://localhost:8080/api/services/tech/';
            const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
            };
            const response = await fetch(technicianUrl, fetchConfig);
            if (response.ok) {
                setFormData({
                    technician_name: "",
                    employee_number: "",
                })
            }
        };

    return (
    <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a Technician</h1>
            <form onSubmit={handleSubmit} id="create-technician-form">
                <div className="form-floating mb-3">
                    <input onChange={handleChange} value={formData.name} placeholder="Technician Name" required type="text" name="technician_name" id="technician_name" className="form-control"></input>
                    <label htmlFor="technician_name">Technician Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleChange} value={formData.name} placeholder="Employee Number" required type="text" name="employee_number" id="employee_number" className="form-control"></input>
                    <label htmlFor="employee_number">Employee Number</label>
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
            </div>
        </div>
    </div>
)};

export default TechnicianForm;
