import React, { useEffect, useState } from 'react';
// import logo from './logo.svg'

function AutoForm() {
    const [models, setModels] = useState([])
    const initialState = {
        color: "",
        year: "",
        vin: "",
        model_id: "",
    }
    const [formData, setFormData] = useState(initialState)

    const fetchModelData = async () => {
        const url = 'http://localhost:8100/api/models/'

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setModels(data.models)
        }
    }

    let spinnerClasses = 'd-flex justify-content-center mb-3';
    let dropdownClasses = 'form-select d-none';
    if (models && models.length > 0) {
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

        const autosUrl = 'http://localhost:8100/api/automobiles/'
        console.log(formData)
        const fetchConfig =
        {
            method: "POST",
            body: JSON.stringify(formData),

            headers: {
                'Content-Type': 'application/json'
            }
        }

        const response = await fetch(autosUrl, fetchConfig)
        if (response.ok) {
            console.log(response)
            const newAuto = await response.json()
            console.log(newAuto)
            setFormData(initialState)
        }

    }


    useEffect(() => {
        fetchModelData();
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
                                <form onSubmit={handleSubmit} id="create-auto-form">
                                    <h1 className="card-title">Add an automobile to inventory</h1>
                                    <div className={spinnerClasses} id="loading-bin-spinner">
                                        <div className="spinner-grow text-secondary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-floating mb-3">
                                            <input onChange={handleFormChange} value={formData.color} required placeholder="Color" type="text" id="color" name="color" className="form-control" />
                                            <label htmlFor="color">Color</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-floating mb-3">
                                            <input onChange={handleFormChange} value={formData.year} required placeholder="Year" type="integer" id="year" name="year" className="form-control" />
                                            <label htmlFor="year">Year</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-floating mb-3">
                                            <input onChange={handleFormChange} value={formData.vin} required placeholder="VIN" type="text" id="vin" name="vin" className="form-control" />
                                            <label htmlFor="year">VIN</label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <select onChange={handleFormChange} value={formData.model_id} name="model_id" id="model_id" className={dropdownClasses} required>
                                            <option value="">Choose a model</option>
                                            {models && models.map(model => {
                                                return (
                                                    <option key={model.id} value={model.id}>
                                                        {model.name}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <button className="btn btn-lg btn-primary">Create</button>
                                </form>
                                <div className="alert alert-success d-none mb-0" id="success-message">
                                    Congratulations! Model added!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AutoForm
