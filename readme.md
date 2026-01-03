# Dayflow – Human Resource Management System (Prototype)

Dayflow is a lightweight HRMS prototype built for a hackathon to demonstrate core HR workflows with a real backend and API-driven architecture.

The focus of this project is **clarity of system design, working APIs, and role-based flows**, not production-level security or completeness.

---

## Features Implemented

- Role-based authentication (Admin / Employee)
- Attendance check-in system
- Leave application and approval workflow
- Payroll visibility (read-only)
- Modular backend architecture
- Minimal frontend dashboard for demo purposes

---

## Tech Stack

- Backend: Node.js + Express
- Data Storage: In-memory (for rapid prototyping)
- Frontend: HTML, CSS, Vanilla JavaScript
- Version Control: Git + GitHub

---

## Backend Architecture

The backend is split into clear, responsibility-based modules:

backend/
├─ server.js # Application bootstrap and route wiring
├─ auth.js # Authentication logic
├─ users.js # User data (admin & employees)
├─ attendance.js # Attendance tracking APIs
├─ leaves.js # Leave request & approval logic
├─ payroll.js # Payroll data (read-only)

yaml
Copy code

This structure allows easy migration to:
- a real database
- stronger authentication
- expanded HR features

---

## Running the Project

### Backend
```bash
cd backend
npm install
node server.js
The backend runs on:

arduino
Copy code
http://localhost:3000
Frontend
Open the frontend directly in a browser:

bash
Copy code
frontend/index.html
Example API Test
bash
Copy code
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@hr.com"}'
Notes & Limitations
This is a prototype, not a production system

Data is stored in memory and resets on restart

Authentication is simplified for demo purposes

UI is minimal and focused on functionality

Future Improvements
Persistent database (PostgreSQL / MongoDB)

Secure authentication (JWT, OAuth)

Role-based access enforcement

Analytics and reporting

Full-featured frontend UI
