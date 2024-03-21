import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema({

        tarea:{
            type: String,
            required: true,
            minLength: 5,
            maxLength: 250,
            unique: true
        }
})

const Tarea = mongoose.model('tareas', tareaSchema)
export default Tarea