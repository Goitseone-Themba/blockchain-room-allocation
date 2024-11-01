### To do:

---

### Frontend Pages

1. **Student Registration Form**:
   - **Fields**: `full_name`, `student_id`, `programme`, `year_of_study`
   - **Submit**: Sends data to `/register-student` to register a student.
   - **Validation**: Basic validation for completeness.

2. **Students Page**:
   - **Table**: Displays all registered students with columns for each detail (`full_name`, `student_id`, `programme`, `year_of_study`, and `room allocation status`).
   - **Allocate Button**: Allocates vacant rooms to unassigned students when clicked. This calls `/allocate-rooms`, which performs bulk allocation and updates student statuses in the table.
   - **Status Check**: Allocation status shows "Allocated" or "Unallocated" based on backend data.

3. **Rooms Page**:
   - **Table**: Lists rooms `B01` to `B70` with columns for `room_number`, `allocation_status`, and `student details` (if allocated).
   - **Deallocate Rooms Button**: Calls `/deallocate-rooms` to reset all room allocations.

---

### Backend Design

#### 1. **Student Registration API (Rocket Endpoint)**

   - **Endpoint**: `/register-student`
   - **Functionality**: Accepts student data from the frontend and stores it in a persistent format for lookup and allocation processing.

#### 2. **Room Allocation Logic (Substrate Pallet)**

   - **allocate_rooms()**:
     - Retrieves all students without room assignments.
     - Assigns the first vacant room in the list `B01` to `B70` to each unallocated student until there are no vacancies or students left.
     - Updates student records with assigned rooms and returns the updated list for frontend display.
   - **deallocate_rooms()**:
     - Clears room allocations at semester end.
     - Sets all rooms and student allocation statuses to "Unallocated."

#### 3. **API Endpoints**

   - **`/register-student`** (POST): Register a new student.
   - **`/get-students`** (GET): Fetches all students and their details for the "Students" page.
   - **`/get-rooms`** (GET): Fetches room information, including allocation status, for the "Rooms" page.
   - **`/allocate-rooms`** (POST): Allocates rooms to all unassigned students, based on the vacancy and student list.
   - **`/deallocate-rooms`** (POST): Resets all room assignments.

---

