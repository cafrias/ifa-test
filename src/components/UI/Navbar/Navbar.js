import React from 'react'

import './Navbar.scss'

import logo from './logo.svg'
import navLinks from './links'

import Button from 'react-bootstrap/lib/Button'
import Dropdown from 'react-bootstrap/lib/Dropdown'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UINavbar = () => {
  return (
    <Navbar variant="light" bg="light" expand="lg">
      <Navbar.Brand href="#">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Company logo"
        />
        {' Dashboard'}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="mr-auto">
          {navLinks.map(({ label, href }, idx) => (
            <Nav.Item key={idx}>
              <Nav.Link href={href}>{label}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        <Nav className="align-items-center">
          <Nav.Item>
            <Button variant="light" size="lg">
              <FontAwesomeIcon icon="search" />
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button variant="light" size="lg">
              <FontAwesomeIcon icon="question-circle" />
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button variant="light" size="lg">
              <FontAwesomeIcon icon="bell" />
            </Button>
          </Nav.Item>
          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle variant="light" id="user">
              <div className="navbar__avatar-container">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Avatar"
                  className="img-fluid navbar__avatar"
                />
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default UINavbar
