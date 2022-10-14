import './App.css';
import Home from './Components/home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Home />
      </div>
    </>
  );
}

export default App;
