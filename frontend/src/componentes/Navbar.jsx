import "./componentes.css";

// router-dom
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-app d-flex align-items-center justify-content-center position-fixed">
      <Link to="/">
        <img alt="LOGO" src="assets/KEOPS-type.png" className="logo-app" />
      </Link>
    </nav>
  );
}

export default Navbar;