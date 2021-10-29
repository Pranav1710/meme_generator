import React from 'react'
import Header from './components/Header'
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>

          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          {/* <Route path='/' component={HomeScreen} exact /> */}
        </Container>

      </main>
    </Router>
  )
}

export default App
