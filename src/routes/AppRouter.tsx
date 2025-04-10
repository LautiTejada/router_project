import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { CursoScreen } from "../components/screens/CursoScreen"
import { EstudianteScreen } from "../components/screens/EstudianteScreen"


export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/cursos" />} />
                <Route path="/cursos" element={<CursoScreen/> } />
                <Route path="/estudiantes/:cursoId" element={<EstudianteScreen />} >
                </Route>
            </Routes>
        </Router>
    )
}