import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ServiceAppointment from './ListAppointments'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="appointments" element={<ServiceAppointment />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
