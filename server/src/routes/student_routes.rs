use rocket::serde::json::Json;
use crate::models::student::Student;

#[post("/register-student", data = "<student>")]
pub async fn register_student(student: Json<Student>) -> Json<&'static str> {
    // Logic to add student to blockchain

    Json("Student registered")
}

#[get("/get-students")]
pub async fn get_students() -> Json<Vec<Student>> {
    // Retrieve students from blockchain

    Json(vec![])
}
