Banking Kubernetes Project
Project Overview

This is a production-style Banking Platform running entirely on Kubernetes.
The platform allows users to open accounts, perform transfers, and view dashboards.

Architecture Diagram
          ┌───────────────┐
          │     User      │
          │(Browser / CLI)│
          └──────┬────────┘
                 │
                 ▼
          ┌───────────────┐
          │    Ingress    │
          │  (NGINX / LB)│
          └─────┬─────┬───┘
                │     │
     ┌──────────┘     └───────────┐
     │                            │
┌───────────────┐          ┌───────────────┐
│ Dashboard Svc │          │ Banking API   │
│ ClusterIP :80 │          │ ClusterIP :3000│
└───────┬───────┘          └───────┬───────┘
        │                           │
        ▼                           ▼
┌───────────────┐           ┌───────────────┐
│ PostgreSQL DB │           │ Deployment    │
│ StatefulSet   │           │ Persistent PVC│
└───────────────┘           └───────────────┘
Project Structure
app/
 ├─ banking-api/        # Node.js API
 ├─ banking-dashboard/  # Dashboard HTML + Nginx
k8s/                    # Kubernetes YAML manifests
app/banking-api → Node.js REST API
app/banking-dashboard → Frontend Dashboard served via Nginx
k8s/ → Kubernetes manifests (Deployments, Services, StatefulSets, PVCs, Ingress, ConfigMaps, Secrets)
Features
Fully containerized with Docker
Deployed on Kubernetes with production-grade manifests
Dashboard for account overview
PostgreSQL database with Persistent Volume
Configurable via ConfigMaps & Secrets
Usage
Build Docker images:
docker build -t your-dockerhub-username/banking-api:latest ./app/banking-api
docker build -t your-dockerhub-username/banking-dashboard:latest ./app/banking-dashboard
Push images to Docker Hub:
docker push your-dockerhub-username/banking-api:latest
docker push your-dockerhub-username/banking-dashboard:latest
Apply Kubernetes manifests:
kubectl apply -f k8s/
Access the platform via the Ingress endpoint.
Suggestions for Improvement
Add RBAC for secure access
Add NetworkPolicies to isolate services
Include readiness & liveness probes for production pods
Add Helm charts for easier deployment