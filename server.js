import express from "express";
import dotenv from "dotenv";
import errorHandler from "./middlewares/errorHandler.js";
import userRoutes from "./routes/user.routes.js";
import db from "./utils/db.js";

dotenv.config();

const app = express();

db();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Working");
});

app.post("/user", userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
