# Building and Deploying a Web Server in Kubernetes  

## Introduction  

In this lecture, we will apply everything we've learned so far to build, containerize, and deploy a web server application in Kubernetes. This hands-on session will cover the entire workflow, from writing the application to accessing it from the browser. By the end of this lecture, you’ll have practical experience deploying an application in Kubernetes.  

---

## Application Flow  

1. **Building a Web Server**:  
   - We’ll create a simple Node.js application that returns the hostname of the machine it runs on.  
2. **Writing the Dockerfile**:  
   - The application will be containerized using Docker.  
3. **Pushing the Image to Docker Hub**:  
   - We’ll push the container image to Docker Hub to make it accessible for deployment.  
4. **Deploying the App in Kubernetes**:  
   - Using Kubernetes, we’ll create a Pod to run the application.  
5. **Accessing It from the Browser**:  
   - Finally, we’ll expose the application and access it from a browser.  

---

## Lecture Goals

- Build a simple Node.js web server
- Understand the basics of containerization
- Prepare for deployment in Kubernetes


## Hands-On: Building the Web Server  

## Step 1: App Code

The web server source code can be found in the `app.js` file located in the App Code folder. The server is designed to:
- Run on a specified port
- Return the hostname of the machine when accessed

### Key Highlights of the Web Server

- Uses Node.js
- Implements a simple HTTP server
- Dynamically retrieves and displays the machine's hostname

## Step 2: Running the Web Server Locally

To run the web server locally, follow these steps:

1. **Install Node.js** if you haven't already. You can download it from [Node.js Official Website](https://nodejs.org/).

3. **Run the Server**: Run the following command in the terminal (in the folder containing `app.js`):

```bash
node app.js
```

3. **Access the Server**: Open your browser and navigate to: http://localhost:3000

You should see a response like:

```
You have hit <hostname>
```

Where `<hostname>` is the name of the machine the server is running on.

## Conclusion

In this session, we've built a simple Node.js web server that responds with the hostname of the machine it's running on. This serves as the base for containerizing and deploying the application in Kubernetes in the following lectures.

## Next Steps

- Review the `app.js` file
- Understand the web server implementation
- Prepare for containerization and deployment in subsequent lectures

## Watch the Video

This repository contains the code corresponding to an in-depth tutorial available on my YouTube channel, <a href="https://www.youtube.com/@muhammadhabib-urrehman/videos" target="_blank"><b>Muhammad Habib</b></a>.

If you prefer visual learning, this is the perfect resource for you. Follow along with the practical demonstration in this video:

**[Building a Web Server in Node.js](https://youtu.be/h_vLut_yZmw)**

<a href="https://youtu.be/h_vLut_yZmw" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a> 