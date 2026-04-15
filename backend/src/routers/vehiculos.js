import { Router } from 'express';
import vehiculosController from "../controllers/vehiculos.js";

const vehiculosRouter = Router();

vehiculosRouter.post("/",vehiculosController.create);
vehiculosRouter.get("/",vehiculosController.readAll);
vehiculosRouter.get("/:id",vehiculosController.read);
vehiculosRouter.put("/:id",vehiculosController.update);
vehiculosRouter.delete("/:id",vehiculosController.delete);

export default vehiculosRouter;