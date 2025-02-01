# Stage 1: Build
FROM node:18 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

# Copy all files including Prisma schema if present
COPY . .

# Generate Prisma Client and build the app
RUN npm run prisma:generate && npm run build

# Stage 2: Serve
FROM node:18 AS runner

WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/package.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 8080

CMD ["node", "dist/main.js"]
