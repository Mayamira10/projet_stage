import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3001/users', {
        userName,
        email,
        password,
        confirmPassword: password, // assuming confirmPassword is the same as the password
        orders: [],
        cart: [],
        typeOfUser: 'client',
      });

      console.log('User registered successfully:', response.data);
      alert("user register successfully");
      setUserName("");
      setEmail("");
      setPassword("");
      // You can redirect to another page or update the UI as needed after successful registration
    } catch (error) {
      console.error('Error registering user:', error.response.data.message);
      // Handle error, show an alert, etc.
    }
  };

  return (
    <Container style={{ minHeight: '680px' }}>
      <Row className="py-5 d-flex justify-content-center hieght-search">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login"> Registre</label>
          <input
            placeholder="nom d'utilisateur"
            type="text"
            className="user-input mt-3 text-center mx-auto"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            placeholder="Email"
            type="text"
            className="user-input my-3 text-center mx-auto"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Mot de passe"
            type="password"
            className="user-input text-center mx-auto"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn-login mx-auto mt-4" onClick={handleRegister}>
            Se connecter
          </button>
          <label className="mx-auto my-4">
            Vous avez déjà un compte ?{' '}
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <span style={{ cursor: 'pointer' }} className="text-danger">
                Cliquer ici
              </span>
            </Link>
          </label>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
