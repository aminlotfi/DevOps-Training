const express = require("express");
const path = require("path");
const http = require("http");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "src", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "src", "index.html"));
});

const port = process.env.PORT || '3001';
const server = http.createServer(app);
server.listen(port);