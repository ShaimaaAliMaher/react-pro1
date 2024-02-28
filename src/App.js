import React from 'react';
import './App.css';
import NavBar from './component/Navbar';
 import { Banner } from './component/Banner';
 import  Skills from './component/Skills'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './component/Projects';
import {Contact} from './component/contact'
import Footer from'./component/footer'
function App() {
  return (<>
    <div className="App">
       <NavBar />
       <Banner/> 
       <Skills/>
      <Projects/> 
      <Contact/> 
      <Footer/>
    </div>
    </>
  );
}
export default App;
