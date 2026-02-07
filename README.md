# TaskFlow

TaskFlow is a role-based task management system built as part of an assessment.  
It allows Admins to manage users, Managers to create projects, assign tasks, and Users to track and update their assigned tasks.

---

## Features

### Admin
- Create users
- Assign roles (User / Manager)

### Manager
- Create projects
- Assign tasks to users

### User
- View assigned tasks
- Update task status (Todo ? In Progress ? Completed)

---

## Tech Stack

- Frontend: React (Vite), TypeScript, Tailwind CSS
- Backend: Node.js, Express
- Database: PostgreSQL
- Authentication: JWT

---

## Test Credentials

Use the following credentials to explore the application:

### Admin
- Email: admin@test.com
- Password: admin123

### Manager
- Email: manager2@taskflow.com
- Password: manager1

### Users
- Email: user3@taskflo.com
- Password: user
--two assidned tasks for user3 using userid 8 from manager2

- Email: user4@taskflow.com
- Password: user1 
--No assigned tasks for user4

---

## Setup Instructions (Optional)

### Backend
```bash
cd taskflow-backend
npm install
npm run dev

###Frontend
cd taskflow-frontend-assessment
npm install
npm run dev
