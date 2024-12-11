import { useEffect, useState } from "react";
import { fetchRooms, deallocateRooms } from "../../shared/utils/api";
import { RoomsTable } from "./RoomsTable";

export const Rooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetchRooms().then(setRooms);
    }, []);

    const handleDeallocate = () => {
        deallocateRooms().then(() => fetchRooms().then(setRooms));
    };

    return <RoomsTable rooms={rooms} onDeallocate={handleDeallocate} />;
};
