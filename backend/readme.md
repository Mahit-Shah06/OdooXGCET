# Dayflow – HR Management System (Prototype)

Dayflow is a lightweight Human Resource Management System prototype built for a hackathon.
The goal was to validate core HR workflows quickly with a real backend and APIs.

## Features Implemented
- Role-based authentication (Admin / Employee)
- Attendance logging (check-in)
- Leave application and approval workflow
- Payroll visibility (read-only)
- Modular backend architecture

## Tech Stack
- Backend: Node.js + Express
- Data Store: In-memory (for rapid prototyping)
- Frontend: Planned (out of scope for backend-first prototype)

## Backend Architecture
The backend is intentionally modular:

backend/
├─ server.js # App bootstrap and routing
├─ auth.js # Authentication logic
├─ users.js # User data (admin & employees)
├─ attendance.js # Attendance tracking
├─ leaves.js # Leave workflows
├─ payroll.js # Payroll data (read-only)

vbnet
Copy code

Each module is isolated to keep responsibilities clear and allow easy scaling.

## Running the Backend
```bash
cd backend
npm install
node server.js
