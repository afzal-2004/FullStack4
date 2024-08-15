import express from "express";
import connectDB from "./Db/index.js";
import dotenv from "dotenv";

const app = express();
app.get("/", (req, res) => {
  req.send("Hello World");
});
dotenv.config({
  path: "./.env",
});

connectDB();
app.listen(process.env.PORT, (req, res) => {
  console.log(` App is  Listen on Port number ${process.env.PORT}`);
});
