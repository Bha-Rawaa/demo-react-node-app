# Use the official Node.js image to build the React app
FROM node:18 as build

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the React app source code
COPY . .

# Build the React app for production
RUN npm run build

# Serve the app using a lightweight web server (e.g., serve)
FROM nginx:alpine

# Copy the build folder to the nginx public folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port for the frontend
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
