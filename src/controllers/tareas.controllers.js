import Tarea from "../database/models/tarea.js"

export const listarTareas = async(req,res)=>{
    try {
        const tareas = await Tarea.find()
        res.status(200).json(tareas)
    } catch (error) {
        console.error(error)
        res.status(400).json({
            mensaje: 'Error al buscar las tareas'
        })
    }
}
export const obtenerTarea = async(req,res)=>{
    try {
        console.log(req.params.id);
        const tareaBuscado = await Tarea.findById(req.params.id)
        if (!tareaBuscado) {
            return res.status(404).json({
                mensaje: 'El ID enviado no corresponde a ningún tarea'
            })
        }
        res.status(200).json(tareaBuscado)
    } catch (error) {
        console.error(error)
        res.status(400).json({
            mensaje: 'Error al buscar las tareas'
        })
    }
}

export const crearTarea = async(req, res)=>{
    try {
        const tareaNueva = new Tarea(req.body)
        await tareaNueva.save()
        res.status(201).json({
            mensaje: 'Tarea creada con exito'
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            mensaje: 'Error al crear el tarea'
        })
    }
}

export const editarTarea = async(req,res)=> {
    try {
        const tareaBuscado = await Tarea.findById(req.params.id)
        if (!tareaBuscado) {
            return res.status(404).json({
                mensaje: 'El ID enviado no corresponde a ningún tarea'
            })
        }
        await Tarea.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({mensaje: 'La tarea fue editada correctamente'})
    } catch (error) {
        console.error(error)
        res.status(500).json({
            mensaje: 'Error al editar el tarea'
        })
    }}
export const borrarTarea = async(req,res)=> {
    try {
        const tareaBuscado = await Tarea.findById(req.params.id)
        if (!tareaBuscado) {
            return res.status(404).json({
                mensaje: 'El ID enviado no corresponde a ningún tarea'
            })
        }
        await Tarea.findByIdAndDelete(req.params.id)
        res.status(200).json({mensaje: 'La tarea fue eliminado correctamente'})
    } catch (error) {
        console.error(error)
        res.status(500).json({
            mensaje: 'Error al eliminar tarea'
        })
    }}