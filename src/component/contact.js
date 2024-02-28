// import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from '../img/contact-img.svg'
export const Contact = () => {
    
    return(<> 
    <section className="contact" id="connect">
      <Container>
      <Row className="align-items-center">
           <Col size={12} md={4}>
            <img src={contactImg}/>
            </Col>
            <Col size={12} md={6}>
            <h2>Get In Touch</h2>
            <form>
              <input type="text"  placeholder="First Name"  />
               <input type="text"  placeholder="Last Name"/>
             <input type="email" placeholder="Email Address" />
            <input type="tel"placeholder="Phone No." />
            <textarea rows="6"  placeholder="Message" ></textarea>
            <button type="submit">send</button>
            </form>
            </Col>
            </Row>
      </Container>
    </section>
     </>
    )
}




