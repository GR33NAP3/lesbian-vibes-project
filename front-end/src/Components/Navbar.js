import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";
import logo from "./nav.png";

function Navigation() {
  return (
    <>
      <Navbar id="navbar" variant="light">
        <Container>
          <Image
            src={logo}
            style={{
              width: "30px",
              border: "1px solid #E8E9EB",
              marginTop: "0px",
              marginBottom: "5px",
            }}
          />
          <Navbar.Brand>Lesbian Vibes</Navbar.Brand>
          <Nav className="me-auto" id="navbar-text">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/signup">SignUp</Nav.Link>
            <Nav.Link href="/matches">Matches</Nav.Link>
            <Nav.Link href="/explore">Explore</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
