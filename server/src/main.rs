#[macro_use] extern crate rocket;

mod models;
mod routes;

use routes::student_routes::*;
use routes::room_routes::*;

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![
            register_student,
            get_students,
            get_rooms,
            allocate_rooms,
            deallocate_rooms
        ])
}
