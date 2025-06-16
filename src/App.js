import React from 'react';
import MobileNav from "./components/MobileNav/MobileNav";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import Education from './pages/Education/Education';
import WorkExp from './pages/WorkExp/WorkExp';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';
import ScrollToTop from "react-scroll-to-top";


function App() {
  return (
    <div>
      <MobileNav/>
      <Layout/>
      <About/>
      <Education/>
      <Techstack/>
      <WorkExp/>
      <Projects/>
      <Contact/>
      <Footer/>

      <ScrollToTop 
      smooth 
      color='white'
      style={{backgroundColor:'#e0b50f', borderRadius:'80px'}}/>
      </div>
  );
}

export default App;
