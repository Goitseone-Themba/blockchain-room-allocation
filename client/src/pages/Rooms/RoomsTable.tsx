import { Room } from "../../shared/utils/types";
import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

interface Props {
    rooms: Room[];
    onDeallocate: () => void;
}

export const RoomsTable = ({ rooms, onDeallocate }: Props) => (
    <Box>
        <Button onClick={onDeallocate}>Deallocate Rooms</Button>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Room Number</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Allocated Student</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rooms.map((room) => (
                    <TableRow>
                        <TableCell>{room.roomNumber}</TableCell>
                        <TableCell>{room.status}</TableCell>
                        <TableCell>{room.student ? room.student.fullname : "None"}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Box>
);
