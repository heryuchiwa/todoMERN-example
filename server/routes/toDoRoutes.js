import express from "express";
import  {getToDos}  from "../controllers/toDoControllers.js";

const router = express.Router();

router.get("/",getToDos)

export default router;