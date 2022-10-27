import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About'; // eslint-disable-line
import Contact from './components/Contact'; // eslint-disable-line
import Home from './components/Home'; // eslint-disable-line
import Navbar from './components/Navbar'; // eslint-disable-line
import Works from './components/Works'; // eslint-disable-line

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
