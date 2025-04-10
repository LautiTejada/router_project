export interface IEstudiante {
    id: string,
    nombre: string,
    edad: number
}

export interface ICurso{
    id: string,
    nombre: string,
    estudiantes: IEstudiante[]
}