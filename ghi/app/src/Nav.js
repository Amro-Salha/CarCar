import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap'



function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <NavDropdown title="Inventory" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">
                <NavLink style={{ textDecoration: "none", color:'green' }} className="" aria-current="page" to="/autoform">Add to Inventory</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <NavLink style={{ textDecoration: "none", color:'green' }} className="" aria-current="page" to="/autolist">View Inventory</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">
                <NavLink style={{ textDecoration: "none", color:'green' }} className="" aria-current="page" to="/modelform">Add a Vehicle</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.7">
                <NavLink style={{ textDecoration: "none", color:'green' }} className="" aria-current="page" to="/modellist">View Vehicles</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.5">
                <NavLink style={{ textDecoration: "none", color:'green' }} aria-current="page" to="/manufacturerform">Add a Manufacturer</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.6">
                <NavLink style={{ textDecoration: "none", color:'green' }} aria-current="page" to="/manufacturerlist">View Manufacturers</NavLink>
              </NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Sales" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">
                <NavLink style={{ textDecoration: "none", color:'green' }} aria-current="page" to="/individualsaleslist">View Individual Sales</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <NavLink style={{ textDecoration: "none", color:'green' }} aria-current="page" to="/saleslist">View Sales</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">
                <NavLink style={{ textDecoration: "none", color:'green' }} aria-current="page" to="/saleform">Add a Sale</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.4">
                <NavLink style={{ textDecoration: "none", color:'green' }} aria-current="page" to="/salespersonform">Add a Salesperson</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.5">
                <NavLink style={{ textDecoration: "none", color:'green' }} aria-current="page" to="/customerform">Add a Customer</NavLink>
              </NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Services" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">
                <NavLink style={{ textDecoration: "none", color:'green' }} className="" aria-current="page" to="/appointments">Appointments</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <NavLink style={{ textDecoration: "none", color:'green' }} className="" aria-current="page" to="/appointments/new">Create Appointment</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">
                <NavLink style={{ textDecoration: "none", color:'green' }} className="" aria-current="page" to="/appointments/history">Service History</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.7">
                <NavLink style={{ textDecoration: "none", color:'green' }} className="" aria-current="page" to="/technician">Add a Technician</NavLink>
              </NavDropdown.Item>
            </NavDropdown>


          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
