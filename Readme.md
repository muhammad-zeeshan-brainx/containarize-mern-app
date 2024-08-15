# MERN Containerized App

This project sets up and runs a containerized MERN (MongoDB, Express, React,
Node.js) application using Docker. The application is split into three
containers: frontend, backend, and MongoDB. Below are detailed instructions on
how the app is structured and how to run it.

## Project Structure

### Containers

1. **Frontend Container:**

   - Built from the Dockerfile located in the `frontend` folder.
   - Binds a named volume to the `/app/src` directory inside the container.
   - Exposes port 5173.

2. **Backend Container:**

   - Built from the Dockerfile located in the `backend` folder.
   - Binds a named volume to the `/app` directory inside the container.
   - Exposes port 3001.
   - Depends on the MongoDB container for database access.

3. **MongoDB Container:**
   - Uses the official MongoDB image.
   - Binds a named volume to persist data at `/data/db`.
   - Exposes port 27017.

### Networking

- All containers are connected to a custom Docker network named `app-net`,
  allowing them to communicate with each other.

## Running the Project

### 1. Prepare Environment Variables

- Obtain the required environment variable files and place them in the `/env`
  folder in the root directory.

### 2. Start Containers

- To start all containers in detached mode (running in the background), run the
  following command in the root directory:

  ```bash
  docker-compose up -d
  ```

### 3. Check Running Containers

- To list all running containers and verify their status, run:

  ```bash
  docker-compose ps
  ```

### 4. View Logs

- To view the logs of a specific container, use:

  ```bash
  docker-compose logs <container_name>
  ```

### 5. Running Containers Individually

- If you want to start containers individually (e.g., starting the backend
  only), you can use:

  ```bash
  docker-compose up <service_name>
  ```

### 6. Stop and Remove Containers

- To stop and remove all running containers, along with their associated
  networks and volumes, run:

  ```bash
  docker-compose down
  ```
