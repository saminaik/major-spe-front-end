
import './App.css';
import PatientOperations from './Patient/PatientOperatins';
import DoctorList from './components/DoctorList';

import PatientRegistration from './Pages/PatientRegister';
import PatientDashboard from './Pages/PatientDashboard';
import PatientBookAppointment from './Pages/PatientBookAppoinment';
import Login from './Pages/Login';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/patientRegistration" element={<PatientRegistration/>}/>
          <Route exact path="/patientDashboard" element={<PatientDashboard/>}/>
          <Route exact path="/patientBookAppointment" element={<PatientBookAppointment/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
