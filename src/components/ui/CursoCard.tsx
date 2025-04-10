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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.4rem",
        padding: "1.4rem",
        width: "25vw",
      }}
    >
      <Card>
        <Card.Body>
                  <Card.Title>{curso.nombre}</Card.Title>
                  <Card.Text>Alumnos: {curso.estudiante.length} </Card.Text>
                  <Button onClick={handleClick} variant="primary" >Ver Estudiantes</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
