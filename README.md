
# Banking Kubernetes Project

## Project Structure
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
                │     │
   ┌────────────┘     └─────────────┐
   ▼                                ▼
┌───────────────┐             ┌───────────────┐
│   Dashboard   │             │  Banking API  │
│ Deployment +  │◄───────────►│  Deployment   │
│ ClusterIP Svc │   HTTP/JSON │ ClusterIP Svc │
└───────┬───────┘             └───────┬───────┘
        │                             │
        │                             │
        ▼                             ▼
   (Displays UI)             ┌───────────────┐
                             │  PostgreSQL   │
                             │ StatefulSet + │
                             │ Persistent PVC│
                             └───────────────┘







- app/banking-api → Node.js API
- app/banking-dashboard → Dashboard HTML + nginx
- k8s → Kubernetes YAML manifests

## Usage
1. Build Docker images
2. Push to Docker Hub
3. Apply YAML files using kubectl