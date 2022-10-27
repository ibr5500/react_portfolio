import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About'; // eslint-disable-line
import Contact from './Components/Contact'; // eslint-disable-line
import Home from './Components/Home'; // eslint-disable-line
import Navbar from './Components/Navbar'; // eslint-disable-line
import Works from './Components/Works'; // eslint-disable-line

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/projects" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
