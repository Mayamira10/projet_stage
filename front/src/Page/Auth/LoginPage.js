import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  const handleLogin = async () => {
 
      try {
        const response = await axios.post('http://localhost:3001/login', {
          email,
          password,
        });
       
      
        const user = response.data;

        if (user.data) {
           
            const usertype =user.data.typeOfUser;
            console.log(usertype);
          if (usertype === 'admin') {
            history.push('/admin/allproducts');
           
          } else if (usertype === 'client') {
            /* history.push('/user/allorders'); */
            alert("client")
            
           
          }
        } else {
          // User not found or incorrect credentials
          console.error('User not found or incorrect credentials');
          // Show an alert or handle the error as needed
        }
    }catch(error) {
            console.error('Error registering user:', error.response.data.message);
            // Handle error, show an alert, etc.
          }
  };

  return (
    <Container style={{ minHeight: '680px' }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login"> Se connecter</label>
          <input
            placeholder="email"
            type="text"
            className="user-input my-3 text-center mx-auto"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="mot de passe"
            type="password"
            className="user-input text-center mx-auto"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn-login mx-auto mt-4" onClick={handleLogin}>
            LOGIN
          </button>
          <label className="mx-auto my-4">
            Vous n'avez pas de compte ?{' '}
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <span style={{ cursor: 'pointer' }} className="text-danger">
                Cliquer ici
              </span>
            </Link>
          </label>
        </Col>

        <label className="mx-auto my-4">
          <Link to="/admin/allproducts" style={{ textDecoration: 'none' }}>
            <span style={{ cursor: 'pointer' }} className="text-danger">
              Login admin
            </span>
          </Link>

          <Link to="/user/allorders" style={{ textDecoration: 'none' }}>
            <span style={{ cursor: 'pointer' }} className="text-danger mx-3">
              Login utilisateur
            </span>
          </Link>
        </label>
      </Row>
    </Container>
  );
};

export default LoginPage;
