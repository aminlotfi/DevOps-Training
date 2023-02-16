FROM node:16-slim

WORKDIR /usr/src/app

COPY default.conf /etc/nginx/conf.d/default.conf
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build-css

CMD node server.js