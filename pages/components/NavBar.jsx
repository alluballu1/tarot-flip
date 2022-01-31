import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { StarFill, Stars } from "react-bootstrap-icons";
const NavBar = () => {
  return (
    <Navbar style={{backgroundColor:"#301934 ", padding:15, position:"fixed", width:"100%", zIndex:100}} variant="dark"  bg="inherit" expand="lg">
  <Container  >
    <Navbar.Brand  href="/"><Stars size={35}/></Navbar.Brand>
    <Navbar.Brand  href="/">TarotFlip</Navbar.Brand>
    <Navbar.Toggle  aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link  href="/">Home</Nav.Link>
        <Nav.Link  href="/screens/TarotScreen">Link</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};
export default NavBar;
