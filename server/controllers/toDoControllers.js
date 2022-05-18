import toDOModel from "../models/toDo.js";

export const getTODOS = async (req,res,next) => {
    try {
        const todos = await toDOModel.find()
        return res.status(200).json({todos});
    } catch (error) {
        return res.status(404).json({message: "No TODOS found"})
    }
}

export const addTODO = async (req,res, next) =>{
    const task = req.body.name;
    try {
        const todo = new toDOModel({task});
        todo.save()
        return res.status(200).json({message: "new todo add"})
    } catch (error) {
        return res.status(500).json({message: "Error while adding new todo"})
    }
}

export const deleteTODO = (req,res,next) =>{

}

export const editTODO = (req,res,next) => {

}