# DevOps Training

Web programming course project for DevOps training. 2022-2023 Fall semester.

## Question 1

### 1.1 Create Dockerfile to dockerized a single page application (SPA).

This is our Dockerfile:

```dockerfile
FROM node:16-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build-css

CMD node server.js
```

### 1.2 Create dockerignore file to ignore node_modules folder.

This is our .dockerignore file:

```
node_modules
npm-debug.log
```

### 1.3 Build docker image and run it.

I ran this command to build the image:

```bash
docker build -t airways-spa .
```

but I got this error:

```diff
- ERROR [internal] load metadata for docker.io/library/node:16-slim
```

I solved this problem by running this command:

```bash
rm  ~/.docker/config.json 
```

Then everything was fine and I could build the image.
To see the image, I ran this command:

```bash
docker images
```

### 1.4 Create NGINX configuration file to serve the SPA.

This is our nginx.conf file:

```nginx
events {
    worker_connections 1024;
}
http {
  server {
    listen 80;
    server_name localhost 127.0.0.1;
    location / {
       add_header Access-Control-Allow-Origin $http_origin;
       proxy_pass http://frontend:3001;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       proxy_set_header Host $http_host;
       proxy_redirect off;
       proxy_set_header X-Forwarded-Proto $scheme;
    }
  }
}
```

### 1.5 Create docker-compose.yml file to run the SPA and NGINX.

This is our docker-compose.yml file:

```yaml
version: "3"

services:
  nginx:
    image: nginx:latest
    container_name: nginx_container
    depends_on:
      - frontend
    volumes:
      - ./frontend/nginx.conf:/etc/nginx/nginx.conf
    ports:
      - "8000:80"
    restart: on-failure

  frontend:
    image: airways-spa
    build:
      context: .
      dockerfile: ./frontend/Dockerfile
    restart: on-failure
```
Then I ran this command to run the SPA and NGINX:

```bash
docker-compose up
```

Now we can see the SPA in the browser by going to this address:

```bash
http://localhost:8000
```

We use reverse proxy and port forwarding to access the SPA.

## Question 2

## Question 3

## Question 4

## Question 5

# Team Members

<table>
    <tr>
        <td>1</td>
        <td>Mohammad Amin Lotfi</td>
        <td>98171075</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Mehdi Abdi</td>
        <td>98105892</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Mahdi Teymoory Anar</td>
        <td>99101354</td>
     </tr>
</table>