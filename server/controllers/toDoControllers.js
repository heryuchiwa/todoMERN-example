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

export const deleteTODO = async (req,res,next) =>{
    const id = req.params.id;

    try {
        await toDOModel.findByIdAndDelete(id)
        return res.status(200).json({message:"Todo removed"})
    } catch (error) {
        return res.status(500).json({message: "Error while deleting new todo"})
    }
}

export const editTODO = async (req,res,next) => {
    const id = req.params.id;
    try {
        const todo = await toDOModel.findById(id);
        todo.task = !todo.task;
        todo.save();
    } catch (error) {
        
    }
}