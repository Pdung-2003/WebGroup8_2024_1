import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/Navbar/Navbar";
import Home from './pages/Home';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import About from './pages/About';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Tickets from './pages/MovieDetails/Tickets/Tickets';
import './App.css';
import PaymentPage from './pages/Payment';
import Footer from './components/Footer/Footer';
import Profile from './pages/Profile';
import UserTickets from './pages/UserTickets';
import SuccessPage from './pages/SuccessPage';
const App = () => {
  return (
      <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user-tickets" element={<UserTickets />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/movies/:id/tickets/:id" element={<Tickets />} />
            <Route path="/payment" element={<PaymentPage/>} />
            <Route path="/success" element={<SuccessPage/>} />
        </Routes>
        <Footer />
      </>
  );
};

export default App;
