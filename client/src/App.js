import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/Navbar/Navbar";
import Home from './pages/Home';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import About from './pages/About';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Booking from './pages/Booking/Booking';
import './App.css';

const App = () => {
  return (
      <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/signin" element={<SignIn />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/booking" element={<Booking />} />
        </Routes>
      </>
  );
};

export default App;
