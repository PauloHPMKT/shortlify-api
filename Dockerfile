FROM node:18-slim

WORKDIR /usr/node/app

COPY package*.json ./

RUN npm install

USER node

COPY . .

EXPOSE 3009