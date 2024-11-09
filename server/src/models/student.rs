use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Student {
    pub full_name: String,
    pub student_id: String,
    pub programme: String,
    pub year_of_study: u32,
    pub room_status: Option<String>,
}
