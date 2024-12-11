import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Student } from "../../shared/utils/types"

interface Props {
    students: Student[];
    onAllocate: () => void;
}

export const StudentsTable = ({ students, onAllocate }: Props) => (
    <Box>
        <Button onClick={onAllocate}>Allocate Rooms</Button>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Full Name</TableCell>
                    <TableCell>Student ID</TableCell>
                    <TableCell>Programme</TableCell>
                    <TableCell>year</TableCell>
                    <TableCell>Room Status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {students.map((student) => (
                    <TableRow key={student.studentId}>
                        <TableCell>{student.fullname}</TableCell>
                        <TableCell>{student.studentId}</TableCell>
                        <TableCell>{student.programme}</TableCell>
                        <TableCell>{student.year}</TableCell>
                        <TableCell>{student.room ? "Allocated" : "Unallocated"}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Box>
)



