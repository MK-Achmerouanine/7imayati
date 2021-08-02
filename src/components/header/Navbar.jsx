import React from "react";
import { Navbar as BNavbar, Nav, Button, Container } from "react-bootstrap";
import { MdAccountCircle } from "react-icons/md";

import HeaderLogo from "../../assets/img/headerlogo.svg";
const Navbar = () => {
  return (
    <BNavbar bg="transparent" expand="lg">
      <Container>
        <BNavbar.Brand href="#home">
          <img
            src={HeaderLogo}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </BNavbar.Brand>
        <Nav>
          <Nav.Link href="#deets">
            <Button variant="primary" className="text-white fw-bolder">
              Créer un compte <MdAccountCircle />
            </Button>
          </Nav.Link>
        </Nav>
      </Container>
    </BNavbar>
  );
};

export default Navbar;
