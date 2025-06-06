# Step 1: Use an official Node.js image as the base image
FROM node:16-alpine

# Step 2: Set the working directory in the container
WORKDIR /usr/src/app


# Step 5: Copy the rest of the application code into the container
COPY app.js .

# Step 6: Expose the port the app will run on
EXPOSE 3000

# Step 7: Command to run the Node.js app
CMD ["node", "app.js"]
