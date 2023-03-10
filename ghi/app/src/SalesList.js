import { useState, useEffect } from "react"


function SalesList(){
  const [sales, setSales] = useState([])

  async function loadSales() {
    const response = await fetch('http://localhost:8090/api/sales/')
    if (response.ok){
      const data = await response.json()
      setSales(data.sales)

    } else {
      console.error(response)
    }
  }


  useEffect(() => {
    loadSales();
  }, []);


  return(
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
      {sales.map( sale => {
        return(
          <tr key={sale.id}>
            <td>{sale.sales_person}</td>
            <td>{sale.customer}</td>
            <td>{sale.automobile}</td>
            <td>${sale.sale_price}</td>
          </tr>
        )
      })}
    </tbody>
  </table>
  )

}

export default SalesList
