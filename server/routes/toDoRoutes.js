import express from "express";
import  {getTODOS,addTODO,editTODO,deleteTODO}  from "../controllers/toDoControllers.js";

const router = express.Router();

//recuperer tous les TODOS
router.get("/",getTODOS)

//ajouter un TODO
router.post("/",addTODO)

//Modifier TODO
router.put("/:id",editTODO)

//Supprimer TODO
router.delete("/:id",deleteTODO)


export default router;