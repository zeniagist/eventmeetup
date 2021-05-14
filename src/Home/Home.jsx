import React, { Component } from "react";
import Login from "./Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Navbar, Nav, Form, Button,
} from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Router>
        <div>

          {/* Hero */}
          <section>
            {/* Navbar */}
            <header>
              <Navbar expand="lg" fixed="top" className='nav-bar'>
                <Navbar.Brand className='app-name navbar-brand'>Event Meetup</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav href='#about' className='event-navbar-item'>About us</Nav>
                  <Nav href='#about' className='event-navbar-item'>Contact us</Nav>
                  <Nav href='#privacy' className='event-navbar-item'>Privacy</Nav>
                  <Form className="ml-auto">
                    <Button 
                      href= "https://accounts.google.com/o/oauth2/v2/auth/identifier?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=1021042902211-7e2b9nm32mg4jct1egghdcc09isfvu74.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fzeniagist.github.io%2Feventmeetup&flowName=GeneralOAuthFlow"
                      variant="light" 
                      className='login-button'
                      >Register/Login</Button>       
                  </Form>
                </Navbar.Collapse>
              </Navbar>
            </header>

            {/* Title */}
            <div className='event-container'>
              <h1 className='event-title'>Discover what's out there.</h1>
              <p className="event-title-details">Log in with your Google account to see upcoming events around the world for full-stack developers</p>
            </div> 

          </section>
        
        </div>
      </Router>
    )
  }
}