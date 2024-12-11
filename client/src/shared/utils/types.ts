export type Student = {
    fullname: string;
    studentId: string;
    programme: string;
    year: number;
    room?: string;
};

export type Room = {
    roomNumber: string;
    status: "allocated" | "unallocated";
    student?: Student; 
}
