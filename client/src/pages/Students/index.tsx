
import { useEffect, useState } from "react";
import { fetchStudents, allocateRooms } from "../../shared/utils/api";
import { StudentsTable } from "./StudentsTable";

export const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents().then(setStudents);
    }, []);

    const handleAllocate = () => {
        allocateRooms().then(() => fetchStudents().then(setStudents));
    };

    return <StudentsTable students={students} onAllocate={handleAllocate} />;
};
