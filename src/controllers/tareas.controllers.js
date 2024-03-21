import Tarea from "../database/models/tarea.js"


export const listarTareas = async(req,res)=>{
    try {
        //pedir a la bd lista de todos los tareas
        const tareas = await Tarea.find()//"find" devuelve todos los datos de una coleccion. Puede tener parametros para agregar filtros al momento d devolver
        //responder al front con array de tareas 
        res.status(200).json(tareas)
    } catch (error) {
        console.error(error)
        res.status(400).json({
            mensaje: 'Error al buscar los tareas'
        })
    }
}
export const obtenerTarea = async(req,res)=>{
    try {
        //verificar si el tarea existe con el id correspondiente
        console.log(req.params.id);
        const tareaBuscado = await Tarea.findById(req.params.id)//"id" debe conincidir con lo que pusimos en la ruta
        //si no existe contestar con un status 404
        if (!tareaBuscado) {
            return res.status(404).json({
                mensaje: 'El ID enviado no corresponde a ningún tarea'
            })
        }
        //si existe enviarlo al frontend, con status 202
        res.status(200).json(tareaBuscado)
    } catch (error) {
        console.error(error)
        res.status(400).json({
            mensaje: 'Error al buscar los tareas'
        })
    }
}

export const crearTarea = async(req, res)=>{
    //por respuesta (try o catch) puedo enciar una sola "res"
    try {
        //creo un tarea basado en el modelo
        const tareaNuevo = new Tarea(req.body)
        //le pido a la bd crear el tarea
        await tareaNuevo.save()//".save" es una querie de mongoose
        //enviar una respuesta cuando puedo crear una respuesta, en este caso 201 
        res.status(201).json({
            mensaje: 'Tarea creado con extio'
            //tambien se puede enviar como respuesta el obj. creado
        })
    } catch (error) {
        console.error(error)
        //con res.status mandamos el codigo de respuesta
        //opcional podemos dumar ".json" que agrega al body de respuesta un mensaje de error, NO para el usuario
        res.status(500).json({
            mensaje: 'Error al crear el tarea'
        })
    }
}

export const editarTarea = async(req,res)=> {
    try {

        //VALIDAR DATOS DEL BODY

        //verificar si el tarea existe con el id correspondiente
        const tareaBuscado = await Tarea.findById(req.params.id)//"id" debe conincidir con lo que pusimos en la ruta
        //si no existe contestar con un status 404
        if (!tareaBuscado) {
            return res.status(404).json({
                mensaje: 'El ID enviado no corresponde a ningún tarea'
            })
        }
        //si existe, modificar prod. y enviar res 202
        await Tarea.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({mensaje: 'El tarea fue editado correctamente'})
    } catch (error) {
        console.error(error)
        //status 500 signfica error interno del servidor
        res.status(500).json({
            mensaje: 'Error al editar el tarea'
        })
    }}
export const borrarTarea = async(req,res)=> {
    try {
        //verificar si el tarea existe con el id correspondiente
        const tareaBuscado = await Tarea.findById(req.params.id)//"id" debe conincidir con lo que pusimos en la ruta
        //si no existe contestar con un status 404
        if (!tareaBuscado) {
            return res.status(404).json({
                mensaje: 'El ID enviado no corresponde a ningún tarea'
            })
        }
        //si existe, eliminar prod. y enviar res 200
        await Tarea.findByIdAndDelete(req.params.id)
        res.status(200).json({mensaje: 'El tarea fue eliminado correctamente'})
    } catch (error) {
        console.error(error)
        //status 500 signfica error interno del servidor
        res.status(500).json({
            mensaje: 'Error al eliminado el tarea'
        })
    }}