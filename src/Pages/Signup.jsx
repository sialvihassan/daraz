import React from 'react';
import './Signup.css'; // Ensure you have custom styles here
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Signup = () => {
  return (
    <div className='login-form'>
      <h1>Welcome To Daraz!</h1>
      <Form className='input-form'>
        <h2>Login to Your Account</h2>
        <Form.Group className="mb-4" controlId="formName">
          <Form.Control type="Name" placeholder="Name*" required />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formnumber">
          <Form.Control type="number" placeholder="Phone number*" required />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formEmail">
          <Form.Control type="email" placeholder="Email*" required />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formPassword">
          <Form.Control type="password" placeholder="Password*" required />
        </Form.Group>
        <Button variant="danger" type="submit" className="custom-button w-100">
          Login
        </Button>
        <p className="forgot-password">
          <a href="/forgot-password" className="toggle-link1">Forgot Password?</a>
        </p>
        <p className="toggle-form-text">
          Don't have an account? <a href="/signup" className="toggle-link2">Sign up</a>
        </p>
      </Form>
    </div>
  )
}

export default Signup