import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { StarFill, Stars } from "react-bootstrap-icons";
const NavBar = () => {
  return (
    <nav
      style={{ padding: 20, background: "#301934", position:"fixed", zIndex:100000, width:"100%"}}
      class="navbar navbar-expand-lg navbar-dark "
    >
      <a class="navbar-brand" href="#">
        <Stars size={34} />
      </a>
      <a class="navbar-brand">TarotFlip</a>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link href={"/"}>
            <a class="nav-item nav-link">Home</a>
          </Link>
          <Link href={"/screens/TarotScreen"}>
            <a class="nav-item nav-link">Table</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
