import { Router } from "express";
import {
    borrarTarea,
    crearTarea,
    editarTarea,
    listarTareas,
    obtenerTarea,
  } from "../controllers/tareas.controllers.js";

  const router = Router();
  router.route("/tareas").post(crearTarea).get(listarTareas)
  router.route("/tareas/:id").delete(borrarTarea).put(editarTarea).get(obtenerTarea)

export default router
