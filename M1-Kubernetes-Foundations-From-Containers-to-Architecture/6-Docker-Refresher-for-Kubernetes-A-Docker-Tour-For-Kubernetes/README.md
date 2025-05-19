# Docker Commands and Management

## Introduction
Docker has revolutionized software development by providing a consistent, portable environment for applications. This guide walks you through essential Docker commands, helping you understand container and image management from a practical perspective.

## Prerequisites
- Installed Docker (version 20.10 or later recommended)
- Basic command-line interface knowledge
- Recommended: 4GB+ RAM, modern multi-core processor
- Administrator/root access on your machine

## Verifying Docker Installation

### Check Docker Version
Verify Docker installation and check its version:

```bash
docker --version
```
**Pro Tips:**
- Ensure you have version 20.10 or later
- Incompatible versions might cause unexpected behaviors
- Recommended to update if version is older than 6 months

### Get Docker System Information
Dive deep into your Docker system configuration:

```bash
docker info
```
**Key Information Includes:**
- Containers: Running and total count
- Images: Number of local images
- Storage driver details
- Docker root directory
- CPU and memory allocation
- Kernel version
- Operating system information

## Container Management Commands

### 1. Running a Container
```bash
docker run [OPTIONS] <image-name>
```
**Common Options:**
- `-d`: Run container in detached mode (background)
- `-it`: Interactive terminal mode
- `--name`: Assign a custom name to container
- `-p`: Map container ports to host

**Example Scenarios:**
```bash
# Simple hello world
docker run hello-world

# Interactive Ubuntu container
docker run -it ubuntu /bin/bash

# Run nginx web server
docker run -d -p 8080:80 nginx
```

### 2. List Running Containers
```bash
docker ps
```
**Useful Flags:**
- `-a`: Show all containers (running and stopped)
- `-q`: Display only container IDs
- `--filter`: Filter containers by conditions

### 3. Stop a Container
```bash
docker stop <container-id or name>
```
**Best Practices:**
- Use container ID or name
- Gracefully stops running processes
- Gives containers time to shutdown cleanly

### 4. Remove a Container
```bash
docker rm <container-id or name>
```
**Flags:**
- `-f`: Force remove running container
- `-v`: Remove associated volumes

### 5. View Container Logs
```bash
docker logs <container-id or name>
```
**Advanced Log Options:**
- `--tail n`: Show last n lines
- `-f`: Follow log output in real-time
- `--since`: Show logs since a specific timestamp

## Image Management Commands

### 1. Pull an Image
```bash
docker pull <image-name>:<tag>
```
**Examples:**
```bash
# Pull latest Ubuntu
docker pull ubuntu

# Pull specific version
docker pull python:3.9-slim
```

### 2. List Local Images
```bash
docker images
```
**Columns Explained:**
- REPOSITORY: Image name
- TAG: Version or variant
- IMAGE ID: Unique image identifier
- CREATED: When image was created
- SIZE: Disk space used

### 3. Remove an Image
```bash
docker rmi <image-id>
```
**Removal Tips:**
- Stop and remove dependent containers first
- Use `-f` to force removal
- Prune unused images with `docker image prune`

### 4. Build a Docker Image
```bash
docker build -t <image-name>:<tag> .
```
**Build Options:**
- `-t`: Tag your image
- `.`: Build context (current directory)
- `--no-cache`: Rebuild without using cached layers

## Practical Tips and Best Practices
- Always use specific image tags instead of 'latest'
- Regularly clean up unused containers and images
- Use Docker Compose for multi-container applications
- Implement multi-stage builds to reduce image size
- Use .dockerignore to optimize build context

## Troubleshooting
- `docker system df`: Check Docker disk usage
- `docker inspect <container-id>`: Detailed container information
- Restart Docker service if experiencing issues

## Conclusion
These basic commands are essential for managing Docker containers and images. By practicing them, you'll gain confidence in using Docker, making it easier to develop, test, and deploy applications effectively. Keep practicing to build a strong foundation for more advanced Docker tasks!

## Recommended Learning Path
1. Docker Fundamentals
2. Dockerfile CLI
3. Docker Compose
4. Container orchestration (Kubernetes)

## Additional Resources
- [Official Docker Documentation](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Docker Community Forums](https://forums.docker.com/)
---
## Watch the Video

If you want a complete walkthrough of Docker commands and container management and want to see these commands in action and learn how to use Docker effectively, check out my YouTube video:


[**Docker Refresher for Kubernetes | A Tour**](<Your YouTube Video Link Here>)

(... previous content remains the same ...)

---
## Watch the Video

If you want a complete walkthrough of Docker commands and container management and want to see these commands in action and learn how to use Docker effectively, check out my YouTube video:

[**Docker Refresher for Kubernetes | A Tour**](<https://youtu.be/AbUwHHdoUQk?si=rxsDlVJgErR0clmB>)

---
## Complete Docker Mastery Course

Want to go beyond these basic commands and become a Docker expert? 

I've created a comprehensive **Docker Mastery(Docker In Simple) Course** that takes you from beginner to advanced Docker professional. The course covers:
- In-depth Docker concepts
- Advanced containerization techniques
- Real-world deployment scenarios
- Kubernetes integration
- Best practices and industry standards

🔗 Course Link: [**Docker Mastery: From Basics to Advanced**](<https://www.youtube.com/playlist?list=PLk78Xv-ivmRQKGB8mDfDR-tyJBcz4Ftsm>)

Subscribe now, bookmark the playlist and transform your development workflow with professional-grade Docker skills!
