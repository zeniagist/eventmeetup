import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar, Nav, Form, Button, Jumbotron, Container,
} from 'react-bootstrap';
import './Home.css';
import Scrollspy from 'react-scrollspy';

export default class Home extends Component {
  render() {
    return (
        <div>
          
          <section>
            {/* Navbar */}
            <header>
              <Navbar expand="lg" fixed="top" className='nav-bar'>
                <Navbar.Brand className='app-name navbar-brand'>Event Meetup</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Scrollspy items={ ['about', 'privacy', 'contact'] } className='event-navbar'>
                  <li>
                    <a href="#about">About us</a>
                  </li>
                  <li>
                    <a href="#privacy">Privacy</a>
                  </li>
                  <li>
                    <a href="#contact">Contact us</a>
                  </li>
                </Scrollspy>
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
          </section>          

          {/* Jumbotron */}
          <section>
            <Jumbotron className='jumbotron'>
                <h1>Discover what's out there.</h1>
                <p>Log in with your Google account to see upcoming events around the world for full-stack developers</p>
                <Button 
                  href= "https://accounts.google.com/o/oauth2/v2/auth/identifier?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=1021042902211-7e2b9nm32mg4jct1egghdcc09isfvu74.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fzeniagist.github.io%2Feventmeetup&flowName=GeneralOAuthFlow"
                  variant="light" 
                  className="jumbtron-button"
                  >Reserve Your Spot</Button> 
            </Jumbotron>   
          </section>  

          {/* About Us */}
          <section id='about'>
            <Container className='about-container'>
              <h1 className='section-title'>About us</h1>
              <p className='section-description'>
                Event meetups are brilliant for meeting with like minded web developers. 
                Whether you are looking for a mentor, job oppurtunity, or business partner our community
                provides virtual and in person networking events. 
              </p>

              <div class="row mt-4">
                <div class="col-sm-4">
                  <h4>350</h4>
                  <hr />
                  <h5>
                    members</h5>
                </div>
                <div class="col-sm-4">
                  <h4>32</h4>
                  <hr />
                  <h5>upcoming networking events</h5>
                </div>
                <div class="col-sm-4">
                  <h4>50</h4>
                  <hr />
                  <h5>co-working spaces across the world</h5>
                </div>
              </div>
            </Container>
          </section>

          {/* Privacy */}
          <section id='privacy'>
          <Container className='privacy-container'>
            <h1 className='section-title'>Privacy</h1>
            <p className='section-description privacy-description'>
              The security of Your Personal Data is important to us, this site is used specifically for education purposes and 
              has no commercial intent or use. No personal data is collected or saved at any stage and the calendar accessed is 
              not a personal calendar, but one created specifically for the project.
            </p>
            <Button 
              href= "https://zeniagist.github.io/eventmeetup/privacy.html" target="_blank" rel="noopener noreferrer"
              variant="light" 
              className="privacy-button"
              >View Privacy Documentation</Button> 
          </Container>
          </section>
        </div>
    )
  }
}