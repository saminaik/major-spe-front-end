import React from 'react';

export default function PatientDashboard() {
 
    
    return (
        <React.Fragment>
          <div>PatientDashboard</div>
          
          <button type="button" className="btn btn-primary btn-lg btn-block">Ask the Query</button>
    <button type="button" className="btn btn-secondary btn-lg btn-block">Book the Appointment</button>
    <button type="button" className="btn btn-ordinary btn-lg btn-block">See Your Appointment</button>
    
        </React.Fragment>
      );
}