import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// eslint-disable
import About from './components/About'; 
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Works from './components/Works';
// eslint-enable
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
