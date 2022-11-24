import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import './App.css';
import About from './Components/About'; // eslint-disable-line
import Contact from './Components/Contact'; // eslint-disable-line
import Home from './Components/Home'; // eslint-disable-line
import Navbar from './Components/Navbar'; // eslint-disable-line
import Works from './Components/Works'; // eslint-disable-line
import Notfound from './Components/Notfound';

const trackID = 'UA-247694122-1'; // my_track_ID
ReactGA.initialize(trackID);
ReactGA.pageview(window.location.pathname);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="*"
          element={<Notfound />}
        />
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          exact
          path="/about"
          element={<About />}
        />
        <Route
          exact
          path="/contact"
          element={<Contact />}
        />
        <Route
          exact
          path="/projects"
          element={<Works />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
