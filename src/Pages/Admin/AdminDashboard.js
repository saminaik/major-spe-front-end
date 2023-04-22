import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function AdminDashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  function seePatients() {
    navigate("/getPatient", { state: { id: location.state } });
  }
  function seeDoctors() {
    console.log("hello");
    navigate("/getDoctors", { state: { id: location.state } });
  }
  function addDoctors() {
    navigate("/addDoctors", { state: { id: location.state } });
  }
  function removeDoctors() {
    navigate("/removeDoctors", { state: { id: location.state } });
  }
  function seeQuery(){
    navigate("/replyQuery", { state: { id: location.state } });
  }
  return (
    <React.Fragment>
      <div>
        <h1>AdminDashboard</h1>
      </div>
      <button type="button" className="btn btn-success btn-lg btn-block" onClick={() => seeQuery()}>
        reply the quiries
      </button>
      <button
        type="button"
        className="btn btn-warning btn-lg btn-block"
        onClick={() => seePatients()}
      >
        See the patients
      </button>
      <button
        type="button"
        className="btn btn-secondary btn-lg btn-block"
        onClick={() => seeDoctors()}
      >
        See the doctors{" "}
      </button>
      <button
        type="button"
        className="btn btn-info btn-lg btn-block"
        onClick={() => addDoctors()}
      >
        Add Doctor{" "}
      </button>
      <button
        type="button"
        className="btn btn-danger btn-lg btn-block"
        onClick={() => removeDoctors()}
      >
        Remove Doctor{" "}
      </button>
    </React.Fragment>
  );
}
