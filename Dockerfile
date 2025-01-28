# Use the official Node.js image
FROM node:18-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy the entire application code
COPY . .

# Generate Prisma client
RUN npm run prisma:generate

# Build the application
RUN npm run build

# Production image to run the app
FROM node:18-alpine

# Set environment variables
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# Install only production dependencies
RUN npm install --only=production

# Expose port
EXPOSE 8080

# Command to run the application
CMD ["node", "dist/main"]
