import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

export default function PatientDashboard(props) {
  const location = useLocation();
  const navigate = useNavigate();
    console.log(location.state.id.token);
  function handleBooking() {

    navigate('/patientBookAppointment', { state: {id: location.state} });                
  }

 //console.log(location.state.id.patient);

  return (
    <React.Fragment>
      <div><h1>PatientDashboard</h1></div>
      <button type="button" className="btn btn-primary btn-lg btn-block">Ask the Query</button>
      <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={() => handleBooking()}>Book the Appointment</button>
      <button type="button" className="btn btn-ordinary btn-lg btn-block">See Your Appointment</button>
    </React.Fragment>
  );
}
