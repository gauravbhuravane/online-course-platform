# Online Course Platform

This project is a frontend-only React application designed to list online courses, display details, and allow dummy enrollments.

It is deployed using a CI/CD pipeline that integrates GitHub, Jenkins, Docker, and Ansible — following modern DevOps practices.

Objectives:

- Clone source code automatically from GitHub
- Build and deploy the React app using Docker
- Use Jenkins for continuous integration and deployment
- Deploy using Ansible (inside WSL or localhost)
- Access the running app from the browser

Technologies Used:

- React.js (Frontend)
- Node.js (Build environment)
- GitHub (Source code management)
- Jenkins (CI/CD automation)
- Docker (Containerization)
- Ansible (Deployment automation)
- Nginx (Static hosting inside Docker)

Project Structure:

online-course-platform/
├── public/
├── src/
│   ├── pages/
│   └── App.js
├── Dockerfile
├── Jenkinsfile
├── deploy.yml
├── package.json
└── README.md

Features:

- Home Page: Welcome message
- Course Categories: Lists all available course types and cards
- Course Details: Descriptions and dummy enroll button
- Enrollment Form: Accepts name and course (dummy)
- Dockerized App: Runs inside a container
- CI/CD Integrated: Jenkins + Ansible workflow

How to Run Locally:

1. Clone the Repository:
   git clone https://github.com/gauravbhuravane/online-course-platform.git
   cd online-course-platform

2. Install Dependencies:
   npm install

3. Start the Application:
   npm start

App will run at http://localhost:3000

How to Run with Docker:

1. Build Docker Image:
   docker build -t online-course-platform .

2. Run Docker Container:
   docker run -d -p 3000:80 --name online-course-platform online-course-platform

Access the app at http://localhost:3000

CI/CD Pipeline (Jenkins + Ansible):

- Jenkinsfile contains pipeline stages:
  - Clone GitHub repo
  - Build Docker image
  - Run Ansible deployment

- Ansible deploy.yml:
  - Stops existing container
  - Builds image
  - Starts a new container

Workflow:

1. Push changes to GitHub
2. Jenkins polls every minute
3. Jenkins triggers pipeline
4. Ansible deploys Docker container
5. App accessible at http://localhost:3000

Collaborator Workflow:

- Create branch: git checkout -b feature/branch-name
- Make commits: git commit -m "Message"
- Push to branch: git push origin feature/branch-name
- Create Pull Request and merge to main or master

Author:

Gaurav Bhuravane  
MCA Student — Finolex Academy of Management & Technology  
This project is part of the DevOps Mini Project Lab
