import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';

import Header from './components/Header';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ML from './components/ML';
import RobotBtn from './components/RobotBtn';
import CVContent from './components/CVContent';
import MusicPlayer from './components/MusicPlayer';

import Tour from 'reactour';
import { useEffect, useState } from 'react';

function App() {

  const [isOpenTour, setIsOpenTour] = useState(localStorage.getItem("isOpenTour"));

  const steps = [
    {
      selector: '.header__navigation',
      content: 'This is my navigation, you can hold Z and say "menu + navigation item-name" to active that section',
      style: {
        color: '#000'
      }
    },
    {
      selector: '.indicator-navigation',
      content: 'This is my menu social link',
      style: {
        color: '#000'
      }
    },
    {
      selector: '.robot-btn',
      content: `
      -- voice features:
      1. menu + {navigation-name}: active that section
      2. nghe nhac: open MusicPlayer
      Click on bot head to enter the tour again
      `,
      content: () => (
        <div>
          <h2>-- hold Z key + voice:</h2>
          <p>1. menu + navigation-name: active that section</p>
          <p>2. nghe nhạc: open MusicPlayer</p>
          <p>3. tắt nhạc: close MusicPlayer</p>
          <p>4. dừng nhạc: pause MusicPlayer</p>
          <p>5. tiếp tục nghe nhạc: countinute MusicPlayer</p>
          <p>6. chơi bài + music-name: play that song</p>
          <p>7. camera: play with Google Teachable ML</p>
          <h4>-- click to enter the tour again!!</h4>
        </div>
      ),
      style: {
        color: '#000'
      },
      position: 'top'
    },
    // ...header__navigation
  ]

  function onBeforeTourClose() {
    localStorage.setItem("isOpenTour", "false");
  }

  const closeTour = () => {
    setIsOpenTour("false");
  };

  return (
    <>
      <Router >
        <ML />
        <RobotBtn setIsOpenTour={setIsOpenTour} />
        <CVContent />
        <MusicPlayer />

        <Header />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Tour
          steps={steps}
          isOpen={isOpenTour !== "false"}
          onRequestClose={() => closeTour()}
          onBeforeClose={() => onBeforeTourClose()}
        />
      </Router>
    </>
  );
}

export default App;
