import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import memeRoutes from "./routes/memeRoutes.js";

dotenv.config();

console.log(process.env.MONGO_URI)
connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/users", userRoutes);
app.use("/api/memes", memeRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}`)
);
