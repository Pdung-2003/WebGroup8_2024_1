import { NavLink } from "react-router-dom";
import { BiUserCircle, BiSearch } from "react-icons/bi"
import { isSignedIn } from "../../function/auth"
import { RiArrowDropDownFill } from "react-icons/ri"
import "./Navbar.css"

const Navbar = () => {

  const signedIn = isSignedIn();

  const handleLogout = () => {
      localStorage.removeItem("token");
      window.location.href = "/";
  };

  return (
    <nav>
      <div className="left">
        <div className="logo">LOGO</div>
        <div className="search-box">
          <BiSearch className="search-btn" />
          <input type="text" placeholder="Search For a Movie" />
        </div>
      </div>
      <div className="right">
        <p className="dropdown">
          Choose Location
          <RiArrowDropDownFill className="drop-icon" />
        </p>
        {signedIn ? (
          <>
              <button onClick={handleLogout} className="theme-btn1 linkstylenone">Logout</button>
              <NavLink to="/" className="linkstylenone">
                  <BiUserCircle className="theme-icon1" />
              </NavLink>
          </>
        ) : (
          <NavLink to="/auth/signin" className="theme-btn1 linkstylenone">
              Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
