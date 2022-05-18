import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const DATABASE_URI = "mongodb+srv://hery:hery@cluster0.2bj8k.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000 

//MiddleWares

app.use(cors());
app.use(express.json())

mongoose.connect(DATABASE_URI)
    .then(app.listen(PORT, () => console.log(`server running on ${PORT}`)))
    .catch(err => console.log(err))

