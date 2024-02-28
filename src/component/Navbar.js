import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { useState , useEffect } from 'react';
import logo from '../img/logo.svg'
import icon1 from '../img/icon1.svg'
import icon2 from '../img/icon2.svg'
import icon3 from '../img/icon3.svg'

function NavBar () {
    const [scrolled ,setScrolled] =useState("false")
 

    useEffect(()=>{
        if (window.scrollY > 50) {
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    window.addEventListener("scroll",onscroll);
    },[])

  return (<>
  <Navbar expand="lg" className={scrolled? "scrolled" :""}>
      <Container>
        <Navbar.Brand >
            <img src={logo} alt='logo'/>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggle-icon'></span>
        </Navbar.Toggle> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="ms-auto">
            <Nav.Link href="#home"  >Home</Nav.Link>
            <Nav.Link  href="#Skills" >Skills </Nav.Link>
            <Nav.Link href="#projects">projects</Nav.Link>
            <Nav.Link href="#Footer">footer</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a><img src={icon1}  /></a>
                <a><img src={icon2}  /></a>
                <a><img src={icon3} /></a> 
            </div>
            <button className='btn'>let's connect
            </button>
          </span>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  </>
    
  );
}

export default NavBar;