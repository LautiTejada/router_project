import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate("/cursos");
  };

  const getTitle = () => {
    if (location.pathname.includes("/estudiantes")) {
      return "Estudiantes";
    }
    if (location.pathname.includes("/cursos")) {
      return "Cursos";
    }
    return "App con React-Router y JSON-Server";
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="shadow-sm mb-4">
      <Container>
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onClick={handleBack}
        >
          {getTitle()}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {location.pathname !== "/cursos" && (
              <Nav.Link onClick={handleBack}>Volver a Cursos</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
