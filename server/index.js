import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000 

//MiddleWares

app.use(cors());
app.use(express.json())

app.listen(PORT, () => console.log(`server running on ${PORT}`))