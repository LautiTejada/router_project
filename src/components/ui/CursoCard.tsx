import { useNavigate } from "react-router-dom";
import { ICurso } from "../../types/ITypes";
import { Button, Card } from "react-bootstrap";

interface Props {
  curso: ICurso;
}

export const CursoCard = ({ curso }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/estudiantes/${curso.id}`);
  };

  return (
    <Card className="shadow-sm rounded-4 m-3" style={{ width: "18rem" }}>
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title className="fw-bold text-primary">{curso.nombre}</Card.Title>
        <Card.Text className="text-muted">
          Alumnos: {curso.estudiantes.length}
        </Card.Text>
        <Button onClick={handleClick} variant="outline-primary">
          Ver Estudiantes
        </Button>
      </Card.Body>
    </Card>
  );
};
