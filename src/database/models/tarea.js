import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema({

        tarea:{
        type: String,
        required: true,
        minLength: 15,
        maxLength: 250,
        unique: true
    }
})

const Tarea = mongoose.model('tarea', tareaSchema)
export default Tarea