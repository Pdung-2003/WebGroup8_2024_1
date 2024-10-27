import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/Navbar/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import './App.css';

const App = () => {
  return (
      <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </>
  );
};

export default App;
