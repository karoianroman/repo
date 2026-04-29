# Cloud-Native Node.js CI/CD Showcase

A streamlined demonstration of a professional **CI/CD pipeline** that automates testing, containerization, and deployment of a Node.js service to **Google Cloud Platform (GCP)**.

## 🚀 Pipeline Overview

This project features a multi-stage **GitHub Actions** workflow designed for reliability and speed. It ensures that only verified code reaches the production environment on **Cloud Run**.

## 🛠 Tech Stack

- **Runtime:** Node.js (v24)
- **Package Manager:** npm
- **Cloud Provider:** Google Cloud Platform (Cloud Run, Artifact Registry)
- **CI/CD:** GitHub Actions
- **Auth:** Workload Identity Federation (Keyless)

---

## 🏗 CI/CD Workflow Stages

The pipeline is divided into three distinct jobs to ensure a safe deployment lifecycle:

### 🧪 1. Testing Stage (`test`)
Before building the image, the pipeline validates the source code:
* **Unit Testing:** Runs `npm test` to verify application logic.
* **Local Smoke Test:** Launches the server inside the GitHub Runner and uses `curl` to verify that `localhost:3000` is responding. This prevents broken builds from reaching the containerization stage.

### 🐳 2. Build & Registry (`build-and-push`)
Once tests pass, the application is containerized:
* **Secure Auth:** Uses **Workload Identity Federation** to interact with GCP without static keys.
* **Immutable Tagging:** Every image is tagged with the unique **Git SHA**, ensuring perfect traceability between the code and the deployed container.
* **Artifact Registry:** Stores the production-ready Docker image in a private Google Cloud repository.

### 🚀 3. Deployment (`deploy`)
* **Conditional Logic:** Deployment only triggers for the `main` branch.
* **Serverless Hosting:** Automatically updates **Cloud Run** with the latest image.
* **Public Access:** Configured with `--allow-unauthenticated` for immediate service availability.

---

## 🚦 Local Development

### Installation & Test
```bash
npm ci
npm test

Manual Run
Bash

node server.js

Docker Build
Bash

docker build -t app-service .
