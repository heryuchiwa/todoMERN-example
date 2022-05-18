import mongoose, { Schema } from "mongoose";

const Shema = mongoose.Schema

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