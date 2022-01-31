import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { StarFill, Stars } from "react-bootstrap-icons";
const NavBar = () => {
  return (
    <nav
      style={{ padding: 20, background: "#301934", position:"fixed", zIndex:100000, width:"100%"}}
      className="navbar navbar-expand-lg navbar-dark "
    >
      <a className="navbar-brand" href="#">
        <Stars size={34} />
      </a>
      <a className="navbar-brand">TarotFlip</a>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link href={"/"}>
            <a className="nav-item nav-link">Home</a>
          </Link>
          <Link href={"/screens/TarotScreen"}>
            <a className="nav-item nav-link">Table</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
