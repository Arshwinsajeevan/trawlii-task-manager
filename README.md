# Trawlii Task Manager 

A simple, mobile-friendly Task Manager web application built with React (Frontend) and Django (Backend).

5️⃣ Live URL
https://trawlii-task-manager.vercel.app/

## Tech Stack
- **Frontend**: React (Vite), CSS, Axios, Lucide React.
- **Backend**: Python, Django, Django REST Framework.
- **Database**: SQLite.

## Features
- Add, View, Complete (Toggle), and Delete tasks.
- Premium UI with glassmorphism effects and responsiveness.
- Mobile-friendly layout.
- RESTful API integration.

## Steps to Run Project Locally

### Prerequisites
- Python (3.8+)
- Node.js (14+)

### Backend Setup
1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Create and activate a virtual environment:
    ```bash
    python -m venv venv
    # Windows:
    .\venv\Scripts\activate
    # Mac/Linux:
    source venv/bin/activate
    ```
3.  Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4.  Run migrations:
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```
5.  Start the server:
    ```bash
    python manage.py runserver
    ```
    The API will be available at `http://localhost:8000/api/`.

### Frontend Setup
1.  Open a new terminal and navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open the application in your browser (usually `http://localhost:5173`).

## Assumptions
- The application is designed for a single user (no authentication required as per basic assignment scope, though easily extensible).
- Local SQLite database is sufficient for demonstration.
- Deployment would be done on Netlify for frontend and Render for backend.

## API Endpoints
- `GET /api/tasks/`: List all tasks.
- `POST /api/tasks/`: Create a new task.
- `PUT /api/tasks/{id}/`: Update a task.
- `DELETE /api/tasks/{id}/`: Delete a task.
