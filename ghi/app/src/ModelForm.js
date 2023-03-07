import React, { useEffect, useState } from 'react';
// import logo from './logo.svg'

function ModelForm() {
    const [manufacturers, setManufacturer] = useState([])
    const initialState = {
        name: "",
        picture_url: "",
        manufacturer_id: "",
    }
    const [formData, setFormData] = useState(initialState)

    const fetchManufacturerData = async () => {
        const url = 'http://localhost:8100/api/manufacturers/'

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setManufacturer(data.manufacturers)
        }
    }

    let spinnerClasses = 'd-flex justify-content-center mb-3';
    let dropdownClasses = 'form-select d-none';
    if (manufacturers && manufacturers.length > 0) {
        spinnerClasses = 'd-flex justify-content-center mb-3 d-none';
        dropdownClasses = 'form-select';
    }

    const handleFormChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const modelsURL = 'http://localhost:8100/api/models/'
        console.log(formData)
        const fetchConfig =
        {
            method: "POST",
            body: JSON.stringify(formData),

            headers: {
                'Content-Type': 'application/json'
            }
        }

        const response = await fetch(modelsURL, fetchConfig)
        if (response.ok) {
            console.log(response)
            const newModel = await response.json()
            console.log(newModel)
            setFormData(initialState)
        }

    }


    useEffect(() => {
        fetchManufacturerData();
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
                                <form onSubmit={handleSubmit} id="create-model-form">
                                    <h1 className="card-title">Create a vehicle model</h1>
                                    <div className={spinnerClasses} id="loading-bin-spinner">
                                        <div className="spinner-grow text-secondary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-floating mb-3">
                                            <input onChange={handleFormChange} value={formData.name} required placeholder="Name" type="text" id="name" name="name" className="form-control" />
                                            <label htmlFor="name">Name</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-floating mb-3">
                                            <input onChange={handleFormChange} value={formData.picture_url} required placeholder="Picture URL" type="url" id="picture_url" name="picture_url" className="form-control" />
                                            <label htmlFor="picture_url">Picture URL</label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <select onChange={handleFormChange} value={formData.manufacturer_id} name="manufacturer_id" id="manufacturer_id" className={dropdownClasses} required>
                                            <option value="">Choose a manufacturer</option>
                                            {manufacturers && manufacturers.map(manufacturer => {
                                                return (
                                                    <option key={manufacturer.id} value={manufacturer.id}>
                                                        {manufacturer.name}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <button className="btn btn-lg btn-primary">Create</button>
                                </form>
                                <div className="alert alert-success d-none mb-0" id="success-message">
                                    Congratulations! Sale added!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModelForm
