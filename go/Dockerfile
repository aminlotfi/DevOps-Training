FROM golang:1.17-alpine
WORKDIR /usr/src/go
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -o /docker-go-auth
CMD [ "/docker-go-auth" ]