import {Link} from 'react-router-dom'
import React, { useState } from 'react'; 
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbars.css";
import Image from 'react-bootstrap/Image';
import logo from '../img/Logo14.png';


const Navbars = () => {
    // สร้าง state ใหม่โดยใช้ useState
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
      setClicked(!clicked);
    }

  return (
    <>
      <nav>
        <div id="logo"><Link to='/'> <Image src={logo} style={{width:150, marginTop:-70,marginBottom:-55}} /></Link></div>
        
        <div>
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li><Link to='/' className='active'>MU Life pass</Link></li>
            <li><Link to='/Event'>ประกาศความเป็นส่วนตัว</Link></li>
            <li><Link to='/FAQ'>ลิงค์ที่เกี่ยวข้อง</Link></li>
            <li><Link to='/'>ดาวน์โหลดเอกสาร</Link></li>
            <li><a href='http://www.student.mahidol.ac.th/portal/index.html' target='_blank'>Student Protal</a></li>
          </ul>
        </div>

        <div id="moblie" onClick={handleClick}> 
        <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      </nav>
      {/* <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">MULIFEPASS</Navbar.Brand>
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

      
        </Navbar.Collapse>
      </Container>
    </Navbar>    */}
    </>
  )
}

export default Navbars