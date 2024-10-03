FROM node:alpine as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Generate a Prisma client
COPY /prisma ./prisma
RUN npx prisma generate

# Copy the application source code
COPY . .

RUN npm run build

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --prod

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main.js"]

