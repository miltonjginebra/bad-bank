import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
//import OverlayTrigger from "react-bootstrap/OverlayTrigger";
//import Tooltip from "react-bootstrap/Tooltip";

const TopNav = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container fluid style={{ padding: " 0 1rem" }}>
          <Navbar.Brand href="#">BadBank</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#/CreateAccount/">Create Account</Nav.Link>
              <Nav.Link href="#/deposit/">Deposit</Nav.Link>
              <Nav.Link href="#/withdraw/">Withdraw</Nav.Link>
              <Nav.Link href="#/alldata/">AllData</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNav;
