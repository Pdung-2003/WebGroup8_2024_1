import { NavLink } from "react-router-dom";
import { BiUserCircle, BiSearch } from "react-icons/bi"
import { RiArrowDropDownFill } from "react-icons/ri"
import "./Navbar.css"

const Navbar = () => {
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
        <NavLink to="/" className="theme-btn1 linkstylenone">Logout</NavLink>
        <NavLink to="/" className="linkstylenone">
          <BiUserCircle className="theme-icon1" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
