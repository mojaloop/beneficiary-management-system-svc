# Use the official Node.js 13.12.0-alpine image as the base image for the builder stage
FROM node:13.12.0-alpine as builder

# Set the working directory to /app
WORKDIR /app

# Set the PATH environment variable to include the node_modules/.bin directory
ENV PATH /app/node_modules/.bin:$PATH

# Copy only the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies and cache them
RUN npm install --silent

# Copy the rest of the application files to the container
COPY . ./

# Build the app
RUN npm run build

# Use the official nginx:alpine image as the base image for the final stage
FROM nginx:alpine

# Copy the build files from the builder stage to the nginx web server directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose the default nginx port
EXPOSE 80

# Start the nginx web server
CMD ["nginx", "-g", "daemon off;"]