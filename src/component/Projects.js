import {Container , Row ,Col , Nav ,Tab} from 'react-bootstrap';
import projImg1 from '../img/project-img1.png' 
import projImg2 from '../img/project-img2.png' 
import projImg3 from '../img/project-img3.png' 
import { ProjectCard } from './projectcards';
export const Projects =()=>{
    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];
    return(
        <>
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2> My Projects</h2>
            <p> my name is shaimaa, i live in cairo,i'm 24 years old</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
            <Nav.Item>
                <Nav.Link eventKey="first">1'st section</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="second">s'ed section</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="third" >3'rd section</Nav.Link>
            </Nav.Item>
            </Nav>
<Tab.Content >
   <Tab.Pane eventKey="first">
    <Row>
    {
        projects.map((project) => {
        return (
                <ProjectCard
                {...project}
                  />
              )
        
        })
    }
  </Row>
</Tab.Pane>
 <Tab.Pane eventKey="second">
     </Tab.Pane>
 <Tab.Pane eventKey="third" className='text-center'> my name is shaimaa  Ali </Tab.Pane>
 </Tab.Content>  
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
        </>
    )
}