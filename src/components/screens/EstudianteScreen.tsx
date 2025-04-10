import { useEffect, useState } from "react";
import { IEstudiante } from "../../types/ITypes";
import { useParams } from "react-router-dom";
import { getAllEstudiantesByCursoId } from "../../services/estudianteServices";
import { Header } from "../ui/Header";
import { EstudianteCard } from "../ui/EstudianteCard";

export const EstudianteScreen = () => {
  const [estudiantes, setEstudiantes] = useState<IEstudiante[]>([]);

  const { cursoId } = useParams();

  useEffect(() => {
    console.log("Obteniendo estudiantes para cursoId: ", cursoId);
    if (cursoId) {
      const cursoid = parseInt(cursoId);
      getAllEstudiantesByCursoId(cursoid).then((estudiantes) => {
        console.log("Estudiantes recibidos: ", estudiantes);
        setEstudiantes(estudiantes);
      });
    }
  }, [cursoId]);

  return (
    <>
      <Header />
      <div className="text-center my-4">
        <h1 className="mb-4">Estudiantes del curso: {cursoId}</h1>
        <div className="d-flex flex-wrap justify-content-center">
          {estudiantes.map((estudiante) => (
            <EstudianteCard key={estudiante.id} estudiante={estudiante} />
          ))}
        </div>
      </div>
    </>
  );
};
