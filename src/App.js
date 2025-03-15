import './App.css';
import DontMiss from './components/dontMiss';
import EventFunc from './components/eventFunc';
import OurServices from './components/ourService';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import FAQ from './components/FAQ';
import Contact from './components/CONT';
import Intro from './components/intro';
import Domains from './components/domains';
import Coordinators from './components/coordinators';
import UpcomingEvents from './components/UpcomingEvents';
import BG from './BG.mp4';
import LoadingPage from './components/LoadingPage';


function App() {
  return (
    <div className="App">
       {/* <LoadingPage />  */}
      <video className="background-video" autoPlay loop muted>
        <source src={BG} type="video/mp4" />
      </video>
      <div className="background-layer" data-theme="light" ></div>
      <NavBar/>
      <HomePage />
      <Intro />
      <Domains/>
      <Coordinators />
      <UpcomingEvents />
      <EventFunc/>
      <DontMiss/>
      <OurServices />
      <FAQ/>
      <Contact />
    </div>
  );
}

export default App;

