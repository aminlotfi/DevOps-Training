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

first we have to pull redis and postgres images with below commands:

```bash
sudo docker pull redis
sudo docker pull postgres
```

then we run the images on some containers with below commands:

```bash
sudo docker run --name rds -p 9001:6379 -d redis
sudo docker run --name pg1 -d -p 9002:5432 postgres -v /path/to/csv/files:/csv postgres
sudo docker run --name pg2 -d -p 9002:5432 postgres -v /path/to/csv/files:/csv postgres
```

to run these containers, we should use these commands:

```bash
sudo docker start rds
sudo docker start pg1
sudo docker start pg2
```
to access bash of a container, following command will help us:

```bash
sudo docker exec -it container-name bash
```
in order to define tables in postgres containers, after running above command and entering pg bash, use these:

```bash
su postgres
psql
```
and then copy&paste ticket.sql in shell!

as we have map /csv root of container to the path of csv files in our system, we can use below commands to imprt csv files to databases:

```bash
COPY table-name FROM '/csv/file-name.csv' DELIMITER ',' CSV HEADER;
```
db and redis containers are ready now!

## Question 3

first we create app images with following command:

```bash
sudo docker build -t image-name -f /path/to/dockerfile /path/to/start
```

then we run it on a container:

```bash
sudo docker run --name container-name -d image-name
```

then we create a network and connect redis, postgres and server containers to that:

```bash
sudo docker network create --driver bridge network-name
sudo docker network connect --alias container-tag network-name container-name
```

to create reverse proxy we sholud create default.conf to redirect requests to where we want:

```bash
server {
    listen 80;

    location / {
        charset utf-8;
        root /usr/share/nginx/html;
    }

    location /node/ {
        add_header Access-Control-Allow-Origin $http_origin;
        proxy_pass http://nodejs:3000;
    }

    .
    .
    .
}
```

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
