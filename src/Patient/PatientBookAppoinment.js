import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Form, Button } from 'react-bootstrap';

export default function PatientBookAppointment() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/api/admin/doctors")
    const updatedUsers = result.data.map(user => ({ ...user, selectedDate: '' }));
    setUsers(updatedUsers);
  }

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const updatedUsers = [...users];
    updatedUsers[index] = { ...updatedUsers[index], selectedDate: value };
    setUsers(updatedUsers);
  };

  const handleAppointmentBooking = (user) => {
    // Check if the selectedDate is not empty
    if (!user.selectedDate) {
      return;
    }
  
    // Send a POST request to the API with the required data
    axios.post('http://localhost:8080/api/book', {
      doctorId: user.id,
      patientId: 1, // Replace 1 with the actual patient ID
      date: user.selectedDate
    })
    .then(response => {
      console.log(response.data); // Handle the response from the API as required
    })
    .catch(error => {
      console.error(error); // Handle any errors that occurred during the request
    });
  }

  return (
    <div className='container'>
      <div className='py-4'>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Specialization</th>
              <th scope="col">Timing</th>
              <th scope="col">Date for of Consultation</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.specialization}</td>
                <td>{user.timing}</td>
                <td>
                  <Form.Label>Registration Date:</Form.Label>
                  <Form.Control type="datetime-local" name="registrationDate" value={user.selectedDate} onChange={(event) => handleChange(event, index)} step="1" />

                </td>
                <td>
                  <Button
                    className='btn btn-primary mx-2'
                    disabled={!user.selectedDate}
                    onClick={() => handleAppointmentBooking(user)}
                  >
                    Book Appointment
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
