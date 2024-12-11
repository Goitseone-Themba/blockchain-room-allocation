import React, { useState } from "react";
import { registerStudent } from "../../shared/utils/api";
import { Button, Select, Stack, TextField } from "@mui/material";

export const StudentForm = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        studentId: "",
        programme: "",
        year: 1,
    })

    const handlechange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await registerStudent(formData);
            alert("Student registered successfully!");
        } catch (err) {
            console.error(err);
            alert("Error registering student.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={2} >
                <TextField name="fullname" variant="filled" placeholder="Full Name" value={formData.fullname} onChange={() => handlechange} required />
                <TextField name="studentId" variant="filled" placeholder="Student ID" value={formData.studentId} onChange={() => handlechange} required />
                <Select name="programme" variant="filled" value={formData.programme} onChange={() => handlechange} required >
                    <option value="">Select Programme</option>
                    <option value="BSc Computer Science">BSc Computer Science</option>
                    <option value="BSc Physics">BSc Physics</option>
                    <option value="BEng Mechatronics">BEng Mechatronics</option>
                    <option value="BEng Telecommunications">BEng Telecommunications</option>
                </Select>
                <TextField name="year" variant="filled" type="number" placeholder="Year of Study" value={formData.year} onChange={() => handlechange} required />
                <Button variant="contained" type="submit">Register</Button>
            </Stack>
        </form>
    );

};
