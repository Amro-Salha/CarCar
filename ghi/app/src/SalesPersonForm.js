import React, { useEffect, useState } from 'react';


function SalesPersonForm() {
    const initialState = {
        name: "",
        employee_number: "",
    }
    const [formData, setFormData] = useState(initialState)


    const handleFormChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }


    const handleSubmit = async (event) => {
        event.preventDefault()
        const salespersonUrl = 'http://localhost:8090/api/salespeople/'
        const fetchConfig =
        {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        }


        const response = await fetch(salespersonUrl, fetchConfig)
        if (response.ok) {
            const newSalesperson = await response.json()
            setFormData(initialState)
        }
    }


    useEffect(() => {
    }, []);

    
    return (
        <div className=" my-5 container">
            <div className="my-5">
                <div className="row">
                    <div className="col col-sm-auto">
                    </div>
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-body">
                                <form onSubmit={handleSubmit} id="create-salesperson-form">
                                    <h1 className="card-title">Create a Salesperson</h1>
                                    <div className="col">
                                        <div className="form-floating mb-3">
                                            <input onChange={handleFormChange} value={formData.name} required placeholder="Name" type="text" id="name" name="name" className="form-control" />
                                            <label htmlFor="name">Name</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-floating mb-3">
                                            <input onChange={handleFormChange} required value={formData.employee_number} placeholder="Employee Number" type="text" id="employee_number" name="employee_number" className="form-control" />
                                            <label htmlFor="employee_number"> Employee Number </label>
                                        </div>
                                    </div>
                                    <button className="btn btn-lg btn-primary">Add Salesperson</button>
                                </form>
                                <div className="alert alert-success d-none mb-0" id="success-message">
                                    Salesperson Added
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalesPersonForm
