import { Card } from "react-bootstrap";
import { IEstudiante } from "../../types/ITypes";

interface Props {
  estudiante: IEstudiante;
}

export const EstudianteCard = ({ estudiante }: Props) => {
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
          <Card.Title>Nombre:{estudiante.nombre}</Card.Title>
          <Card.Text>Edad: {estudiante.edad}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
