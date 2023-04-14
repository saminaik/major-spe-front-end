import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

function PatientOperations() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/patients/add-query/1', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="name@example.com" onChange={handleChange} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" name="message" rows="3" onChange={handleChange} />
      </Form.Group>

      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default PatientOperations;
