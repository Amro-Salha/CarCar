import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ServiceAppointment from './ListAppointments'
import AppointmentForm from './AppointmentForm';
import ServiceHistory from './ServiceHistory';
import TechnicianForm from './TechnicianForm';
import SalesPersonForm from './SalesPersonForm';
import CustomerForm from './CustomerForm';
import SaleForm from './SaleForm';
import SalesList from './SalesList';
import IndividualSalesList from './IndividualSalesList';
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import ModelList from './ModelList';
import ModelForm from './ModelForm';
import AutoList from './AutoList';
import AutoForm from './AutoForm';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="appointments">
              <Route index element={<ServiceAppointment />} />
              <Route path="history" element={<ServiceHistory />} />
              <Route path="new" element={<AppointmentForm />} />
          </Route>
          <Route path="technician" element={<TechnicianForm />} />
          <Route path="salespersonform" element={<SalesPersonForm />} />
          <Route path="customerform" element={<CustomerForm />} />
          <Route path="saleform" element={<SaleForm />} />
          <Route path="saleslist" element={<SalesList />} />
          <Route path="individualsaleslist" element={<IndividualSalesList />} />
          <Route path="manufacturerlist" element={<ManufacturerList />} />
          <Route path="manufacturerform" element={<ManufacturerForm />} />
          <Route path="modellist" element={<ModelList />} />
          <Route path="modelform" element={<ModelForm />} />
          <Route path="autolist" element={<AutoList />} />
          <Route path="autoform" element={<AutoForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
