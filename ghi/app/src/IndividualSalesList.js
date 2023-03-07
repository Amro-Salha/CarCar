import { useState, useEffect } from "react"

function IndividualSalesList(){
  const [sales, setSales] = useState([])
  const [salespeople, setSalespeople] = useState([])
  const [filter, setFilter] = useState([])

  const initialState = {
    automobile: "",
    sales_person: "",
    customer: "",
    sale_price: "",
    }

  const [formData, setFormData] = useState(initialState)

  const fetchSalesPersonData = async () => {
    const url = 'http://localhost:8090/api/salespeople/';

    const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setSalespeople(data.sales_people)
            console.log(salespeople)
        }
    }

    let spinnerClasses = 'd-flex justify-content-center mb-3';
    let dropdownClasses = 'form-select d-none';
    if (salespeople && salespeople.length > 0) {
        spinnerClasses = 'd-flex justify-content-center mb-3 d-none';
        dropdownClasses = 'form-select';
    }

    const handleFormChange = (event) => {
        setFilter(event.target.value)
        console.log(event.target.value)
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })

    }
    async function loadSales() {

    const response = await fetch('http://localhost:8090/api/sales/')
    if (response.ok){
        const data = await response.json()
        console.log(data.sales)
        setSales(data.sales)


        } else {
        console.error(response)
        }
    }



  useEffect(() => {
    loadSales();
    fetchSalesPersonData();
    }, []);



  return(
    <>
    <h1>Sales person history</h1>
    <div className="mb-3">
        <select onChange={handleFormChange} value={formData.sales_person} name="sales_person" id="sales_person" className={dropdownClasses} required>
            <option value="">Choose a sales person</option>
            {salespeople && salespeople.map(salesperson => {
                return (
                    <option key={salesperson.id} value={salesperson.name}>
                        {salesperson.name}
                    </option>
                )
                    })}
        </select>
    </div>
        <table className='table table-striped'>
        <thead>
            <tr>
            <th>Salesperson</th>
            <th>Customer</th>
            <th>VIN</th>
            <th>Sale price</th>
            </tr>
        </thead>
        <tbody>
            {sales.filter((sale) => sale.sales_person === filter).map( sale => {
            return(
                <tr key={sale.id}>
                <td>{sale.sales_person}</td>
                <td>{sale.customer}</td>
                <td>{sale.automobile}</td>
                <td>{sale.sale_price}</td>
                </tr>
            )
            })}
        </tbody>
        </table>
    </>
    )

}

export default IndividualSalesList
