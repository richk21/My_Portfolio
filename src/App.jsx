import { BrowserRouter } from "react-router-dom";

import {
  About,
  Certifications,
  Contact,
  Education,
  Experience,
  Landing,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center bg-fit linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))'>
          <Navbar />
          <Landing />
        </div>
        <About />
        <Education />
        <Experience />
        <Tech />
        <Works />
        <Certifications />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
