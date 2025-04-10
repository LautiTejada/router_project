import { useEffect, useState } from "react";
import { ICurso } from "../../types/ITypes";
import { getAllCursos } from "../../services/cursoServices";
import { Header } from "../ui/Header";
import { CursoCard } from "../ui/CursoCard";

export const CursoScreen = () => {
  const [cursos, setCursos] = useState<ICurso[]>([]);

  useEffect(() => {
    getAllCursos()
      .then((data) => {
        setCursos(data);
      })
      .catch((error) => {
        console.log("Error");
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <h1>Cursos</h1>
        <div>
          {cursos.map((curso) => (
            <CursoCard key={curso.id} curso={curso} />
          ))}
        </div>
      </div>
    </>
  );
};
