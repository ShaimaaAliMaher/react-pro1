import { useState , useEffect } from "react"
import { Container, Row , Col} from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import header from "../img/header.svg"

export const Banner =()=>{
     const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
     const [text, setText] = useState('');
     const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer", "Web Designer" ];
    const period = 2000;
  
    useEffect(() => {
       let ticker = setInterval(() => {
         tick();
     }, delta);
       return () => { clearInterval(ticker) };
    }, [text])

   const tick = () => {
    let i = loopNum % toRotate.length;
   let fullText = toRotate[i];
   let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
       setDelta(prevDelta => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }

    return(
        <>
        <section className="banner" id="home">
           <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">welcom all in my portofilo</span>
                    <h1>{`Hi! i'm Shaimaa Ali`}<span className="wrap"> {text}</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    <button onCanPlay={()=>{console.log("connect")}}>Let's go <ArrowRightCircle size={25} /></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                 <img src={header} alt="heeder"></img>
                </Col>
            </Row>
           </Container>
        </section>
        
        </>
    )
}