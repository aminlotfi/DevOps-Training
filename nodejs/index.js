import express from "express";
import routes from "./src/presentation/routes.js"
import db from "./src/database/db.js";

const port = process.env.PORT || 3004;

const app = express();
app.use(express.json());
app.use(routes);
app.listen(port);
console.log(`server is up on port ${port}`);
