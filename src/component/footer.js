import React from "react"
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap"
import logo from '../img/logo.svg'
import icon1 from '../img/icon1.svg'
import icon2 from '../img/icon2.svg'
import icon3 from '../img/icon3.svg'
function Footer () {
return(
    <>
    <section className="footer" id="Footer">
        <Container className="foo" >
            <div className="div1">
                <h3> see my project at once & leave yor email</h3>
            </div>
            <div className="div2">
                <input type="email" placeholder="your email address"/>
            <button>submet</button></div>
        </Container>
        <div className="div3">
            <div className="fifty">
               <img src={logo} alt="Logo" />  
            </div>
            <div className="fifty">
                 <div className="social-icon">
              <a href="#"><img src={icon1} alt="Icon" /></a>
              <a href="#"><img src={icon2} alt="Icon" /></a>
              <a href="#"><img src={icon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved here by shaimaa Ali</p>
            </div>
        </div>
    

    </section>
    </>
)
}
export default Footer