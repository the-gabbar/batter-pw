# Use a specific Node.js version supported by Railway.app
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy only necessary files for production (excluding development dependencies)
COPY .next ./.next
COPY public ./public

# Expose the port Next.js is running on
EXPOSE $PORT

# Command to run the Next.js application
CMD ["npm", "start"]
