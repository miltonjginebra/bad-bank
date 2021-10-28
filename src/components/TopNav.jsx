import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const TopNav = () => {
  const [activeNav, setActiveNav] = React.useState(0);

  const page_links = [
    "#/",
    "#/createaccount",
    "#/deposit",
    "#/withdraw",
    "#/alldata",
  ];

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
        <Container fluid style={{ padding: " 0 1rem" }}>
          <Navbar.Brand href="#">BadBank</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto"
              activeKey={activeNav}
              onSelect={(selectedKey) => setActiveNav(selectedKey)}
            >
              {["Home", "Create Account", "Deposit", "Withdraw", "AllData"].map(
                (page, i) => (
                  <OverlayTrigger
                    key={page}
                    placement="bottom"
                    overlay={
                      <Tooltip id={`tooltip-${page}`}>
                        This is the <strong>{page}</strong> page.
                      </Tooltip>
                    }
                  >
                    <Nav.Link href={page_links[i]} eventKey={i}>
                      {page}
                    </Nav.Link>
                  </OverlayTrigger>
                )
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNav;
