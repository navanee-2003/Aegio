import './App.css';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
