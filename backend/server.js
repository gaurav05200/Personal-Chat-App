// server.js

import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import { app, server } from "./socket/socket.js";

import connectToDb from "./db/connectToDb.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

const PORT = process.env.PORT || 5173;

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello, MERN stack!");
});

server.listen(PORT, () => {
  connectToDb();
  console.log(`Server is running on port ${PORT}`);
});
