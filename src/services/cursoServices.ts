import { api } from "../http/api"
import { ICurso } from "../types/ITypes"

export const getAllCursos = async (): Promise<ICurso[]> => {
    const response = await api.get<ICurso[]>("/cursos")
    return response.data
}