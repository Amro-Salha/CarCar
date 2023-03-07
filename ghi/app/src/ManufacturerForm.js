import React, { useEffect, useState } from 'react';
// import logo from './logo.svg'

function ManufacturerForm() {
    const initialState = {
        name: "",
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

        const manufacturersUrl = 'http://localhost:8100/api/manufacturers/'
        console.log(formData)
        const fetchConfig =
        {
            method: "POST",
            body: JSON.stringify(formData),

            headers: {
                'Content-Type': 'application/json'
            }
        }

        const response = await fetch(manufacturersUrl, fetchConfig)
        if (response.ok) {
            console.log(response)
            const newManufacturer = await response.json()
            console.log(newManufacturer)
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
                        {/* <img width="300" className="bg-white rounded shadow d-block mx-auto mb-4" src={logo} /> */}
                    </div>
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-body">
                                <form onSubmit={handleSubmit} id="create-manufacturer-form">
                                    <h1 className="card-title">Create a manufacturer</h1>
                                    <div className="col">
                                        <div className="form-floating mb-3">
                                            <input onChange={handleFormChange} value={formData.name} required placeholder="Name" type="text" id="name" name="name" className="form-control" />
                                            <label htmlFor="name">Name</label>
                                        </div>
                                    </div>
                                    <button className="btn btn-lg btn-primary">Create</button>
                                </form>
                                <div className="alert alert-success d-none mb-0" id="success-message">
                                    Manufacturer Added
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ManufacturerForm
