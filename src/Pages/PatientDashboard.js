import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';


export default function PatientDashboard(props) {
  const location = useLocation();
  const navigate = useNavigate();
    
  function handleBooking() {

    navigate('/patientBookAppointment', { state: {id: location.state} });                
  }
   function seeAppointmets(){
    navigate('/patientSeeAppointment',{ state: {id: location.state} })
   }
   function askTheQuery(){
    
    navigate('/patientAskQuery',{ state: {id: location.state} })
   }
 //console.log(location.state.id.patient);
 function SeePriscrip(){
  navigate('/seePris',{ state: {id: location.state} })
 }
function SeeQuiries(){
  navigate('/seequery',{ state: {id: location.state} })
}
  return (
    <React.Fragment>
      <div><h1>PatientDashboard</h1></div>
      <button type="button" className="btn btn-success btn-lg btn-block"onClick={() => askTheQuery()}>Ask the Query</button>
      <button type="button" className="btn btn-danger btn-lg btn-block" onClick={() => SeeQuiries()}>See Your Quiries</button>
      <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={() => handleBooking()}>Book the Appointment</button>
      <button type="button" className="btn btn-warning btn-lg btn-block" onClick={() => seeAppointmets()}>See Your Appointment</button>
      <button type="button" className="btn btn-dark btn-lg btn-block" onClick={() => SeePriscrip()}>See Your Priscription</button>
      

    </React.Fragment>
  );
}
