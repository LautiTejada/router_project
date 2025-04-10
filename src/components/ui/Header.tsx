import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/cursos");
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand style={{ cursor: "pointer" }} onClick={handleBack}>
          App con React-Router y JSON-Server
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-nabar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleBack}>Cursos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
