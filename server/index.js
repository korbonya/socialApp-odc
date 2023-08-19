import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";


import authRoutes from "./routes/auth.js";

dotenv.config();

const DB_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);

mongoose
  .connect(DB_URL, {

  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
