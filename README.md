
# 🚀 Automate Code Deployment Using CI/CD (GitHub Actions)

## 📌 Overview
This project automates the **deployment** of a Node.js web application using **GitHub Actions** and **Docker**.  
It implements a **CI/CD pipeline** that triggers on every push to the `main` branch, builds the Docker image, and deploys the app.

---

## 🛠 Tech Stack
- **Node.js** & **Express.js** – Web application
- **Docker** – Containerization
- **GitHub Actions** – CI/CD automation
- **VirtualBox (Ubuntu)** – Deployment environment

---

## 📂 Project Structure
.
├── .github/workflows/main.yml # GitHub Actions workflow
├── Dockerfile # Docker build configuration
├── package.json # Dependencies & scripts
├── server.js # Express server code
└── README.md # Project documentation


---

## ⚙️ CI/CD Workflow
1. **Trigger** – On push to `main` branch.
2. **Install** – Install Node.js dependencies.
3. **Build** – Build the application.
4. **Docker Build & Push** – Push Docker image to DockerHub.
5. **Deploy** – Pull updated image and run the container.

---

## ▶️ Running Locally
```bash
# Clone repo
git clone <your-repo-link>
cd <project-folder>

# Install dependencies
npm install

# Start server
npm start

Open http://localhost:3000 in your browser.


🐳 Running with Docker

# Build Docker image
docker build -t <dockerhub-username>/<image-name> .

# Run container
docker run -p 3000:3000 <dockerhub-username>/<image-name>


🌐 Access from Host (VirtualBox)
If running inside VirtualBox:

1.In server.js:
   app.listen(3000, '0.0.0.0');

2.In VirtualBox → Settings → Network → Port Forwarding:
   Host Port: 3000 → Guest Port: 3000
3.Access via: http://localhost:3000


📚 What I Learned
Creating a CI/CD pipeline with GitHub Actions.

Building & pushing Docker images.

Deploying a Node.js app in a VM.

Setting up VirtualBox networking for external access.


