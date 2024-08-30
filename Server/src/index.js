import express from "express";
import connectDB from "./Db/index.js";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
import Userrouter from "./routes/index.js";
app.get("/", (req, res) => {
  res.send("Hello World");
});
dotenv.config({
  path: "./.env",
});
app.use(cors());
app.use(express.json());
app.use("/contact_manager", Userrouter);



connectDB()
  .then(() => {
    app.listen(process.env.PORT, (req, res) => {
      console.log(` App is  Listen on Port number ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
