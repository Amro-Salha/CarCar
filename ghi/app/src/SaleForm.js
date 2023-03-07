import React, { useEffect, useState } from 'react';
// import logo from './logo.svg'

function SaleForm() {
    const [autos, setAutos] = useState([])
    const [salespeople, setSalespeople] = useState([])
    const [customer, setCustomer] = useState([])
    const initialState = {
        automobile: "",
        sales_person: "",
        customer: "",
        sale_price: "",
    }
    const [formData, setFormData] = useState(initialState)

    const fetchAutomobileData = async () => {
        const url = 'http://localhost:8100/api/automobiles/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setAutos(data.autos)
        }
    }

    const fetchSalesPersonData = async () => {
        const url = 'http://localhost:8090/api/salespeople/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setSalespeople(data.sales_people)
        }
    }

    const fetchCustomerData = async () => {
        const url = 'http://localhost:8090/api/customers/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setCustomer(data.customers)
        }
    }

    let spinnerClasses = 'd-flex justify-content-center mb-3';
    let dropdownClasses = 'form-select d-none';
    if (autos && autos.length > 0) {
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

        const salesUrl = 'http://localhost:8090/api/sales/'
        console.log(formData)
        const fetchConfig =
        {
            method: "POST",
            body: JSON.stringify(formData),

            headers: {
                'Content-Type': 'application/json'
            }
        }

        const response = await fetch(salesUrl, fetchConfig)
        if (response.ok) {
            console.log(response)
            const newSale = await response.json()
            console.log(newSale)
            setFormData(initialState)
        }

    }


    useEffect(() => {
        fetchAutomobileData();
        fetchSalesPersonData();
        fetchCustomerData();
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
                                <form onSubmit={handleSubmit} id="create-sale-form">
                                    <h1 className="card-title">Record a new sale</h1>
                                    <div className={spinnerClasses} id="loading-bin-spinner">
                                        <div className="spinner-grow text-secondary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <select onChange={handleFormChange} value={formData.automobile} name="automobile" id="automobile" className={dropdownClasses} required>
                                            <option value="">Choose an automobile</option>
                                            {autos && autos.map(auto => {
                                                return (
                                                    <option key={auto.id} value={auto.id}>
                                                        {auto.vin}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <select onChange={handleFormChange} value={formData.sales_person} name="sales_person" id="sales_person" className={dropdownClasses} required>
                                            <option value="">Choose a sales person</option>
                                            {salespeople && salespeople.map(salesperson => {
                                                return (
                                                    <option key={salesperson.id} value={salesperson.id}>
                                                        {salesperson.name}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <select onChange={handleFormChange} value={formData.customer} name="customer" id="customer" className={dropdownClasses} required>
                                            <option value="">Choose a customer</option>
                                            {customer && customer.map(cust => {
                                                return (
                                                    <option key={cust.id} value={cust.id}>
                                                        {cust.name}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="col">
                                        <div className="form-floating mb-3">
                                            <input onChange={handleFormChange} value={formData.sale_price} required placeholder="Sale price" type="integer" id="sale_price" name="sale_price" className="form-control" />
                                            <label htmlFor="sale_price">Sale Price</label>
                                        </div>
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
export default SaleForm
