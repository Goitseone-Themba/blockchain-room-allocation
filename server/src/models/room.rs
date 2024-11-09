use serde::{Deserialize, Serialize};

pub struct Room {
    pub room_number: String,
    pub status: String,
    pub assigned_student_id: Optoin<String>,
}
