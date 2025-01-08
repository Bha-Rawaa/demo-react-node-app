# Demo React Node App with PostgreSQL

This is a full-stack demo application using **React**, **Node.js**, and **PostgreSQL**. The application is dockerized for easy setup and deployment.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Docker**: To build and run containers.
- **Docker Compose**: To orchestrate the multi-container application.

## Setup Instructions

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/rawaabha/demo-react-node-app.git
cd demo-react-node-app
```
### 2. Add env variables

```bash
PG_USER=demo_user
PG_PASSWORD=demo_user
PG_DB=demo_db
PG_HOST=postgres
PG_PORT=5432
```

### 3. build and start the containers
 
```bash
docker compose up -d
```
