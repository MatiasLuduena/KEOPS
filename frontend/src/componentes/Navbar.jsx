import "./componentes.css";

// router-dom
import { Link } from "react-router-dom";

import { FaUser, FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="nav-app d-flex align-items-center justify-content-between position-fixed">
      <Link to="/" className="mx-3">
        <img alt="LOGO" src="assets/KEOPS-type.png" className="logo-app" />
      </Link>
      <div className="d-flex">
        <Link to="/" className="usuario">
          <FaHome size={25}/>
        </Link>
        <Link to="/usuario" className="mx-5 usuario">
          <FaUser size={23}/>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;