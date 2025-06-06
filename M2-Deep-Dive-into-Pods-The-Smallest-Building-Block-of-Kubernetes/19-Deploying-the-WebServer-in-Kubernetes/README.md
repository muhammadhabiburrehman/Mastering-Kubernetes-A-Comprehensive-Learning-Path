# Deploying the App in Kubernetes

## Introduction

In the previous lecture, we learned how to tag and push a Docker image to Docker Hub, making it available for deployment in Kubernetes. In this lecture, we will take the next step and learn how to deploy the containerized application in a Kubernetes cluster.

---

## Lecture Goals

- Learn how to deploy a containerized application using Kubernetes.
- Understand the `kubectl run`, `kubectl get`, and `kubectl expose` commands.
- Explore Kubernetes Services in future lectures.(but now exposed it,don't get confused for now, we will explore it in detail future)

---

## Key Concepts

### What is Kubernetes Pod??


Kubernetes enables us to manage containerized applications across a cluster of machines. When deploying an application in Kubernetes, we define a Pod, which is the smallest deployable unit in Kubernetes. A Pod can contain one or more containers that share the same network and storage, making it the basic structure for running applications in Kubernetes.

In this context, when deploying an application, we typically define a Pod to host our application container(s). The Pod serves as the runtime environment for our application, and it can be managed, scaled, and accessed using Kubernetes Services.



### `kubectl run Command`

The `kubectl run` command is used to create a Pod in Kubernetes. The basic syntax of this command is:

```
kubectl run <podname> --image=<image-name> --restart=Never --port=<app-port>
```

- `<podname>:` The name of the Pod.
- `<image-name>:`The name of the Docker image (which we pushed earlier to Docker Hub).
- `--restart=Never:` This option indicates that the Pod is not intended to be part of a replication controller or deployment. We'll explore --restart=Never in the next lecture in detail.
- `<app-port>:` The port the app listens to (e.g., 3000 for a Node.js app).

### `kubectl get <objectname>`

The `kubectl get` command is used to retrieve information about Kubernetes objects. The `<objectname>` is a placeholder for the type of object you want to query, such as Pods, Services, Deployments, etc.

#### Example:
```
kubectl get pods
```
This command will return a list of all Pods in the current namespace, including their status, number of containers, and other relevant details.

#### Common Object Types:
- `pods:` Lists all Pods in the current namespace.
- `services:` Lists all Services in the current namespace.
- `deployments:` Lists all Deployments in the current namespace.

---

## Hands-On: Deploying the App in Kubernetes

### Step 1: Run the App in Kubernetes

To deploy your app in Kubernetes, use the following command:

```
kubectl run <podname> --image=<image-name> --restart=Never --port=<app-port>
```
Example

```
kubectl run serverpod --image=myusername/node-web-server:v1.0 --restart=Never --port=3000
```
This command creates a Pod named `serverpod` using the Docker image myusername/node-web-server:v1.0 and exposes it on port 3000.


### Step 2: Get the Pod Status

After deploying the Pod, you can check its status using the `kubectl get` command:

```
kubectl get pods
```

This will list all the Pods running in your Kubernetes cluster. You should see your `serverpod` listed here.

### Step 3: Expose the App

To make your app accessible externally, you need to expose it using a Kubernetes Service. Use the following command to expose the Pod:

```
kubectl expose pod <podname> --type=NodePort --port=<any-port> --target-port=3000
```
Example
```
kubectl expose pod serverpod --type=NodePort --port=8080 --target-port=3000
```
- <b>Note: Don’t panic or get confused if you're not entirely sure about how the expose command works right now. We will deep dive into Kubernetes Services in future lectures, so you will have a clearer understanding at that time.

---

## Conclusion

In this session, we learned how to deploy a containerized application in Kubernetes using the `kubectl run`, `kubectl get`, and `kubectl expose` commands. We also covered the concept of exposing the app using a Kubernetes Service, though we will explore it in more detail in future lectures.

---

## Watch the Video

This repository contains the code corresponding to an in-depth tutorial available on my YouTube channel, <a href="https://www.youtube.com/@muhammadhabib-urrehman/videos" target="_blank"><b>Muhammad Habib</b></a>.

If you prefer visual learning, this is the perfect resource for you. Follow along with the practical demonstration in this video:

**[Deploying the App in Kubernetes](https://youtu.be/83zeIEZMgnQ)**

<a href="https://youtu.be/83zeIEZMgnQ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a> 