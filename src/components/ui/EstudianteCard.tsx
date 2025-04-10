import { Card } from "react-bootstrap";
import { IEstudiante } from "../../types/ITypes";

interface Props {
  estudiante: IEstudiante;
}

export const EstudianteCard = ({ estudiante }: Props) => {
  return (
    <Card className="shadow-sm rounded-4 m-3" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title className="fw-bold">{estudiante.nombre}</Card.Title>
        <Card.Text className="text-muted">Edad: {estudiante.edad}</Card.Text>
      </Card.Body>
    </Card>
  );
};
