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
        {/* ambient background glow — purely decorative, sits behind every section */}
        <div className='fixed inset-0 z-0 overflow-hidden pointer-events-none'>
          <div className='absolute -top-40 -left-32 w-[32rem] h-[32rem] rounded-full bg-accent/20 blur-[120px]' />
          <div className='absolute top-1/3 -right-40 w-[28rem] h-[28rem] rounded-full bg-accent-2/15 blur-[130px]' />
          <div className='absolute bottom-0 left-1/4 w-[24rem] h-[24rem] rounded-full bg-accent/10 blur-[110px]' />
        </div>

        <div className='relative'>
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
