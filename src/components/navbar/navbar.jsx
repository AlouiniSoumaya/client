import React from 'react'
import {Navbar, Nav, Button, Form, Container, Modal} from "react-bootstrap"
import { useState } from 'react'
import CustomModals from '../modals/CustomModals'
export default function HomeNavbar() {
  return (
    <div>
    <Navbar expand="lg">
      <Container fluid>
      <div className='logo'><img src="/img/Logotasky_img.png" class="logo"/></div>
     
        <Nav className=" navtab me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="Home">Home</Nav.Link>
              <Nav.Link href="My Tasks">My Tasks</Nav.Link>     
              <Nav.Link href="Done">Done</Nav.Link>  
        </Nav>
            <Form className="d-flex">
              <CustomModals />
            </Form>
            <div class="circle">
              <span class="initials">MS</span>
            </div>
      </Container>
      </Navbar>   
    </div>
  )
}
