FROM node:16-slim
WORKDIR /usr/src/nodejs
RUN pwd
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "index.js"]