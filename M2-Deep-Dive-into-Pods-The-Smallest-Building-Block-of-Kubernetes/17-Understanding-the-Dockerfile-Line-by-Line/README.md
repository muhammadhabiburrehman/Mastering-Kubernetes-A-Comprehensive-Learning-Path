# Understanding Dockerfile Commands for the Node.js Web Server

## Introduction

In this lecture, we will break down the individual Dockerfile commands used to containerize the Node.js web server. Understanding these commands will give you a deeper insight into how Docker images are built and how each step contributes to the final container. By the end of this lecture, you'll have a solid understanding of the commands used in a Dockerfile to build and run applications inside containers.

---

## Lecture Goals

- Understand the purpose and function of each Dockerfile command
- Learn how to use `FROM`, `WORKDIR`, `COPY`, `EXPOSE`, and `CMD`
- Understand how these commands work together to build a containerized Node.js application

---

## Hands-On: Breaking Down the Dockerfile

### Dockerfile Breakdown

Let's go over the Dockerfile used for containerizing the Node.js web server:

```dockerfile
# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the application code into the container
COPY app.js .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["node", "app.js"]
```


### Step 1: **FROM node:16-alpine**

The `FROM` instruction sets the base image for your container. In this case, we are using the official Node.js image version `16-alpine`. This image is based on Alpine Linux, which is a small, efficient Linux distribution ideal for Docker images because of its smaller size.

- **Purpose**: Sets the starting point for the image.
- **Why Alpine**: It's lightweight and optimized for containers.

---

### Step 2: **WORKDIR /usr/src/app**

The `WORKDIR` instruction sets the working directory for the application inside the container. Any subsequent commands, such as `COPY` or `RUN`, will use this directory as the base location.

- **Purpose**: Specifies where the application files will reside inside the container.
- **Example**: In this case, we set it to `/usr/src/app`.

---

### Step 3: **COPY app.js .**

The `COPY` instruction copies files from your local machine into the container. In this case, `app.js` is copied to the current working directory inside the container (`.` represents the current directory in the container, which is `/usr/src/app` due to the `WORKDIR` command).

- **Purpose**: Transfers the application code into the container.
- **Explanation**: This step ensures the application code is available for the container to run.

---

### Step 4: **EXPOSE 3000**

The `EXPOSE` instruction informs Docker that the container listens on port `3000`. This is the port the Node.js application will run on, and it is important for networking and communication.

- **Purpose**: Exposes the port the containerized app will listen to.
- **Explanation**: It doesn't actually publish the port outside the container; that's done during the `docker run` command using port mapping (e.g., `-p 3000:3000`).

---

### Step 5: **CMD ["node", "app.js"]**

The `CMD` instruction defines the default command to run when the container starts. In this case, it tells Docker to run the `node app.js` command to start the web server.

- **Purpose**: Specifies the command to run inside the container when it's started.
- **Explanation**: The `CMD` command is typically the final command in a Dockerfile and is used to run the application or service inside the container.

---

## Conclusion

In this session, we've examined each of the Dockerfile commands and understood their role in building and running the Node.js web server inside a container. Each command has a specific purpose, and when combined, they create an efficient, functional container for your application.

---

## Next Steps

- Continue to the next lecture where we will Tag and push the Docker image to Docker Hub.
- Will  deploying the containerized application in Kubernetes.

---


## Watch the Video

This repository contains the code corresponding to an in-depth tutorial available on my YouTube channel, <a href="https://www.youtube.com/@muhammadhabib-urrehman/videos" target="_blank"><b>Muhammad Habib</b></a>.

If you prefer visual learning, this is the perfect resource for you. Follow along with the practical demonstration in this video:

**[Dockerfile Commands for Node.js Web Server](https://youtu.be/TAZ3syDny8A)**

<a href="https://youtu.be/TAZ3syDny8A" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a> 