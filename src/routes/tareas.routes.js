import { Router } from "express";
import {
    borrarTarea,
    crearTarea,
    editarTarea,
    listarTareas,
    obtenerTarea,
  } from "../controllers/tareas.controllers.js";

  const router = Router();
  router.route('/tareas').post(crearTarea)

export default router
