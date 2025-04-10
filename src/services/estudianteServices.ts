import { api } from "../http/api";
import { IEstudiante } from "../types/ITypes";


export const getAllEstudiantesByCursoId = async (cursoId: number): Promise<IEstudiante[]> => {
    try {
        const response = await api.get(`/cursos/${cursoId}`)
        return response.data.estudiantes || []
    } catch (error) {
        console.log(error);
        return []
    }
}