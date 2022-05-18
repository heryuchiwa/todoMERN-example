import mongoose from "mongoose";

const Schema = mongoose.Schema

const toDoSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const toDOModel = mongoose.model('task',toDoSchema);

export default toDOModel;