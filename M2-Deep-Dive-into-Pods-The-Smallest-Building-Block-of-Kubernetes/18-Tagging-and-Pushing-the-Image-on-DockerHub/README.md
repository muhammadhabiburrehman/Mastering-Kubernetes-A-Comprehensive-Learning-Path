# Tagging And Pushing Docker Image to DockerHub

## Introduction

In this lecture, we will explore Kubernetes and how it plays a critical role in deploying containerized applications. Kubernetes (K8s) is a powerful orchestration system that helps manage containerized applications at scale. It automates the deployment, scaling, and management of containerized applications. 

One important thing to understand is that Kubernetes **does not build images**. Instead, it expects pre-built Docker images that are already available in a container registry, such as Docker Hub, to deploy applications. 

In this session, we’ll  go through the practical steps of **tagging and pushing your Docker image to Docker Hub** so that it is ready for deployment in Kubernetes.

---

## Lecture Goals

- Learn how Kubernetes expects pre-built Docker images for deployment.
- Practice tagging and pushing a Docker image to Docker Hub.

---

## Key Concepts

### What is Kubernetes?

Kubernetes is an open-source platform designed to automate deploying, scaling, and managing containerized applications. It provides features like self-healing, load balancing, automatic scaling, and rolling updates, making it a robust system for handling large-scale applications in production.

### Kubernetes and Docker Images

Kubernetes doesn’t build Docker images for you. Instead, it **deploys containerized applications** using pre-built images stored in a container registry like Docker Hub or a private registry. This means that before deploying an app in Kubernetes, you need to ensure that the app's Docker image is built, tagged, and pushed to a registry.

---

## Hands-On: Tagging and Pushing Docker Image to Docker Hub

In this practical section, we will go through the steps of tagging your Docker image and pushing it to Docker Hub.

### Step 1: Tag the Docker Image

Once you have built your Docker image locally, it’s time to tag it so that it can be uploaded to Docker Hub. Use the following command to tag the image:

```bash
docker tag <local-image-name or id> <dockerhub-username>/<repository-name>:<tag>
```


- `<local-image-name or id>`: The name of your local Docker image or its id.
- `<dockerhub-username>`: Your Docker Hub username.
- `<repository-name>`: The repository where you want to push the image.
- `<tag>`: The tag for the image, usually `latest` or a version number or leave empty.

This command tags the local Docker image `node-web-server` as `myusername/node-web-server:v1.0`.

```bash
docker tag node-web-server myusername/node-web-server:v1.0
```

---

### Step 2: Push the Image to Docker Hub
Now that the image is tagged, you can push it to your Docker Hub repository using the following command:
```bash
docker push <dockerhub-username>/<repository-name>:<tag>
```
Example
```bash
docker push myusername/node-web-server:v1.0
```
This command pushes the tagged Docker image **myusername/node-web-server:v1.0** to Docker Hub.

---

### Step 3: Verify the Image on Docker Hub

Once the push is successful, visit your Docker Hub profile and verify that the image is uploaded to your repository. You should see the image listed with the correct tag.

---

## Conclusion

In this session, we learned that Kubernetes is an orchestration system for deploying containerized applications and it requires pre-built Docker images to function. We also practiced tagging and pushing a Docker image to Docker Hub so that it is available for deployment in Kubernetes.

---

## Next Steps

- Review the process of tagging and pushing Docker images to Docker Hub.
- Continue to the next lecture where we will learn how to deploy the containerized application in Kubernetes.

---

## Watch the Video

This repository contains the code corresponding to an in-depth tutorial available on my YouTube channel, <a href="https://www.youtube.com/@muhammadhabib-urrehman/videos" target="_blank"><b>Muhammad Habib</b></a>.

If you prefer visual learning, this is the perfect resource for you. Follow along with the practical demonstration in this video:

**[Tagging and Pushing Docker Image to Docker Hub](https://youtu.be/XKFadEbdpak)**

<a href="https://youtu.be/XKFadEbdpak" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a> 