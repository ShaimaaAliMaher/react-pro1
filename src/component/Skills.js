import Carousel from 'react-bootstrap/Carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../img/meter1.svg";
import meter2 from "../img/meter2.svg";
import meter3 from "../img/meter3.svg";
import { Container } from 'react-bootstrap';

function Skills() {
  return (
    <Container className='skill' id='Skills'>
    <div className="skill-bx">
    <h2>Skills</h2>
    <p>you can see my skills</p>
    <Carousel >
      <Carousel.Item className='slider'>
       <img src={meter1} alt="Image" />
        <Carousel.Caption>
          <h5>front end</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='slider'>
       <img src={meter3} alt="Image" />
        <Carousel.Caption>
          <h5>data scince</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='slider'>
       <img src={meter2} alt="Image" />
        <Carousel.Caption>
          <h5>designe</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='slider'>
       <img src={meter2} alt="Image" />
        <Carousel.Caption>
          <h5>web developer</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </Container>
  );
}

export default Skills;



