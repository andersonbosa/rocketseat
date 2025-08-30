# Use an official Node.js runtime as the base image
FROM node:20.3.0-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm ci

# Copy the entire application code to the working directory
COPY . .

# Expose the default port for the mobile application (assuming it's 3000)
EXPOSE $PORT

# Define the command to run the mobile application
CMD ["npm", "run", "start"]
