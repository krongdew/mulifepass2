import {Link} from 'react-router-dom'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbars = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" bg='dark' data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link> <Link to='/' style={{textDecoration : 'none', color:'blue'}}>MU Life pass</Link></Nav.Link>
            <Nav.Link><Link to='/Event'>Event</Link></Nav.Link>
            <Nav.Link><Link to='/FAQ'>FAQ</Link></Nav.Link>
            <NavDropdown title="TEST" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">TEST</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>   
    </>
  )
}

export default Navbars