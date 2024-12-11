import { BrowserRouter as Router, Routes, Route } from "react-router"
import { StudentForm } from "../pages/StudentForm"
import { Students } from "../pages/Students"
import { Rooms } from "../pages/Rooms"

export const AppRoutes = () => {

    return (
        <Router>
           <Routes>
                <Route path="/" element={<StudentForm />} />
                <Route path="/students" element={<Students />} />
                <Route path="/rooms" element={<Rooms />} />
           </Routes>
        </Router>
    ) 
}
