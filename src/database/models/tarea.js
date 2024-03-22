import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema({

        tarea:{
            type: String,
            required: true,
            minLength: 5,
            maxLength: 250,
            unique: true
        },
        prioridad:{
            type: String,
            required: true
        },
        fechaHora:{
            type: String,
            required: true
        }
})

const Tarea = mongoose.model('tareas', tareaSchema)
export default Tarea