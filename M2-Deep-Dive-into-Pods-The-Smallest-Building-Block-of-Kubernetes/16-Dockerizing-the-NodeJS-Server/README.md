# Containerizing a Node.js Web Server with Docker

## Introduction

In this lecture, we will take the Node.js web server application we built in the previous session and containerize it using Docker. This hands-on session will guide you through writing the Dockerfile, setting up port mapping, and running the container. By the end of this lecture, you'll have the skills to create and run a containerized Node.js web server.

---

## Lecture Objectives

- Understand Dockerfile syntax and structure
- Learn how to containerize a Node.js application
- Practice Docker image building and container management
- Implement port mapping for container networking

---

## Hands-On: Containerizing the Web Server

### Step 1: Creating the Dockerfile

The Dockerfile defines how to build a container image for our web server. Key components include:
- Base image selection
- Setting working directory
- Copying application files
- Installing dependencies
- Defining startup command

Example Dockerfile:
```dockerfile
# Use official Node.js runtime as base image
FROM node:16-alpine

# Set working directory in the container
WORKDIR /usr/src/app

# Copy app.js in the specified Directory
COPY app.js .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]
```

### Step 2: Building the Docker Image

Build the container image using the following command:

```bash
docker build -t server .
```

### Step 3: Verification Steps

1. Verify image creation: `docker images`
2. Check running containers: `docker ps`

---

### Step 4: Running the Container

Run the container with port mapping:

```bash
docker run -p 4000:3000 webserver
```

#### Port Mapping
- `-p 4000:3000`: Maps host port 4000 to container port 3000 (Can use any port on 4000, if do then make sure to access the app on that PORT, but don't change 3000 otherwise have to change in code too)

---

### Step 5: Accessing the Application
To access the application, open your browser and navigate to:

`http://localhost:4000`

You should see a response similar to:

```
You have hit <container id>
```
Where ```<container_id>``` is the unique identifier of the running container.

---

## Key Learnings

- Docker containers package applications with all dependencies
- Dockerfiles provide reproducible build instructions
- Port mapping enables external access to containerized services

---


## Next Steps

- Review the Dockerfile and understand the steps
- Understand container orchestration concepts
- Prepare for Kubernetes deployment in the next session

---

## Troubleshooting

- Ensure Docker is installed
- Check for port conflicts
- Verify Node.js and npm are correctly configured

---

## Additional Resources

- [Docker Documentation](https://docs.docker.com)
- [Node.js Docker Best Practices](https://nodejs.org/en/docs/guides/)

---

## Watch the Video

This repository contains the code corresponding to an in-depth tutorial available on my YouTube channel, <a href="https://www.youtube.com/@muhammadhabib-urrehman/videos" target="_blank"><b>Muhammad Habib</b></a>.

If you prefer visual learning, this is the perfect resource for you. Follow along with the practical demonstration in this video:

**[Writing a Dockerfile and Running Containers](https://youtu.be/VAZBI6uF5Zs)**

<a href="https://youtu.be/VAZBI6uF5Zs" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a> 
