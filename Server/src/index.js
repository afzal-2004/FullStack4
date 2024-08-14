import express from "express";
import connectDB from "./Db/index.js";
import dotenv from "dotenv";
const PORT = 3000;
const app = express();
app.get("/", (req, res) => {
  req.send("Hello World");
});
dotenv.config({
  path: "./.env",
});
// dotenv.config({
//   path: "./.env",
// });
connectDB();
app.listen(PORT, (req, res) => {
  console.log(` App is  Listen on Port number ${PORT}`);
});
