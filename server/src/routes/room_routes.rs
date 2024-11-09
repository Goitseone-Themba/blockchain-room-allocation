use rocket::serde::json::Json;
use crate::models::room::Room;

#[get("/get-rooms")]
pub async fn get_rooms() -> Json<Vec<Room>> {
    //Retrieve rooms from blockchain
    
    Json(vec![])
}

#[post("/allocate-rooms")]
pub async fn allocate_rooms() -> Json<&'statis str> {
    // Logic to allocate rooms using the Substrate pallet
    Json("Rooms allocated")
}

#[post("/deallocate-rooms")]
pub async fn deallocate_rooms() -> Json<&'static str> {
    //Login to deallocate rooms using the Substrate pallet

    Json("Room deallocated")
}
