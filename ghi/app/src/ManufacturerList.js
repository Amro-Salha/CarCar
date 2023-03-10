import { useState, useEffect } from "react"


function ManufacturerList(){

  const [manufacturers, setManufacturers] = useState([])


  async function loadManufacturers() {
    const response = await fetch('http://localhost:8100/api/manufacturers/')
    if (response.ok){
      const data = await response.json()
      setManufacturers(data.manufacturers)

    } else {
      console.error(response)
    }
  }


  useEffect(() => {
    loadManufacturers();
  }, []);


  return(
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {manufacturers.map( manufacturer => {
          return(
            <tr key={manufacturer.id}>
              <td>{manufacturer.name}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

}

export default ManufacturerList
