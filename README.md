# Cloud-Native Node.js Service

A professional boilerplate for deploying secure, containerized **Node.js** applications to **Google Cloud Platform (GCP)** using high-standard **DevSecOps** practices.

## 🚀 Overview

This project demonstrates a streamlined deployment flow for Node.js microservices. It features a fully automated CI/CD pipeline that handles security auditing, image scanning, and serverless hosting on **Cloud Run**.

## 🛠 Tech Stack

- **Runtime:** Node.js
- **Cloud Provider:** Google Cloud Platform (Cloud Run, Artifact Registry)
- **CI/CD:** GitHub Actions
- **Security:** Gitleaks, Hadolint, Trivy
- **Auth:** Workload Identity Federation (Keyless)

---

## 🏗 CI/CD & DevSecOps Pipeline

The automation workflow (`ci.yml`) is designed to ensure that no code reaches production without passing strict security and quality checks:

### 🛡️ Security & Quality Gates
* **Secret Scanning (Gitleaks):** Checks every commit to prevent accidental leaks of API keys or GCP credentials.
* **Dockerfile Linting (Hadolint):** Validates the container structure for security, size optimization, and best practices.
* **Vulnerability Scanning (Trivy):** Scans the final Docker image for known CVEs in the Node.js runtime and dependencies.

### 📦 Deployment Flow
* **Workload Identity Federation (WIF):** Secure, keyless authentication between GitHub and GCP (OIDC).
* **Automated Packaging:** Builds and tags the Docker image with the Git SHA, pushing it to **Artifact Registry**.
* **Serverless Deployment:** Deploys directly to **Cloud Run**, ensuring automated scaling and managed HTTPS.

### 🔥 Final Verification
* **Automated Smoke Test:** A post-deployment step that uses `curl` to verify the service is live and responding with HTTP 200.

---

## 🚦 Local Development

### Installation
```bash
npm install

Run Locally
Bash

npm start

Docker Commands
Bash

docker build -t node-cloud-service .
docker run -p 8080:8080 node-cloud-service
