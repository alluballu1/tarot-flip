import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Stars } from "react-bootstrap-icons";
const NavBar = () => {
  const styles = {
    navBarStyle: {
      backgroundColor: "#301934 ",
      padding: 15,
      position: "fixed",
      width: "100%",
      zIndex: 100,
    },
    linkStyle: {
      margin: 10,
      textDecoration: "none",
    },
  };

  return (
    <Navbar style={styles.navBarStyle} variant="dark" bg="inherit" expand="lg">
      <Container>
        <Navbar.Brand>
          <Stars size={35} />
        </Navbar.Brand>
        <Navbar.Brand href="/">TarotFlip</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href={"/"}>
              <a className="text-muted" style={styles.linkStyle}>
                Home
              </a>
            </Link>

            <Link href={"/screens/TarotScreen"}>
              <a className="text-muted" style={styles.linkStyle}>
                Margin
              </a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
