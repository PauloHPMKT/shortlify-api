FROM node:18-slim

WORKDIR /usr/node/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3009

CMD ["sh", "-c", "npm install tail"]