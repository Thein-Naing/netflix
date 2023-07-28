import netflix from "../images/netflix.png";
import netflixuser from "../images/netflixuser.png";
import "../Style/Navbar.css";

const Navbar = () => {

  return (
    <div className="nav nav__black">
      <div className="nav__contents">
        <img
          className="nav__logo"
          // src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?w=1024"
          src={netflix}
          alt="logo"
        />
        <img className="nav__avatar" src={netflixuser} alt="avatar" />
      </div>
    </div>
  );
};

export default Navbar;
