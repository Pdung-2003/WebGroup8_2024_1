import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/Navbar/Navbar";
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
      <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </>
  );
};

export default App;
