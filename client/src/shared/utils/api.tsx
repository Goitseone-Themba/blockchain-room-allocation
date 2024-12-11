import axios from "axios";
import { Student } from "./types";

const API_BASE = "http://localhost:8000";

const fetchStudents = async () => {
    const response = await axios.get(`${API_BASE}/get-students`);
    return response.data;
};

const registerStudent = async (student: Student) => {
    const response = await axios.post(`${API_BASE}/register-student`, student);
    return response.data;
};

const fetchRooms = async () => {
    const response = await axios.get(`$API_BASE}/get-rooms`);
    return response.data;
}

const allocateRooms = async () => {
    const response = await axios.post(`${API_BASE}/allocate-rooms`, );
    return response.data;
}

const deallocateRooms = async () => {
    const response = await axios.post(`${API_BASE}/deallocateRooms`);
    return response.data;
}

export { fetchStudents, registerStudent, fetchRooms, allocateRooms, deallocateRooms }
