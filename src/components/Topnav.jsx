import { CiSearch } from "react-icons/ci";
import telly from "../assets/tv.png";
import { HiMenuAlt4 } from "react-icons/hi";

const Topnav = () => {
  return (
    <header className="topnav">
      {/* Logo */}
      <div className="logo">
        <img src={telly} />
        <h5>MovieBox</h5>
      </div>
      {/* Search form */}
      <form className="search-form">
        <input type="search" placeholder="What do you want to watch?" />
        <CiSearch className="search-icon" />
      </form>
      {/* Signin */}
      <div className="sign-cont">
        <button>Sign in</button>
        {/* Menu */}
        <div className="menu-icon">
          <HiMenuAlt4 style={{ color: "white", fontSize: 28 }} />
        </div>
      </div>
    </header>
  );
};

export default Topnav;
