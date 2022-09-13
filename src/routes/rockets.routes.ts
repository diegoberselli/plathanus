import { verifyAuthAdmService } from "./../middlewares/verifyAdm.middleware";
import { Router } from "express";
import RocketsController from "../controllers/Rockets.controller";
import { ensureAuth } from "../middlewares/ensureAuth.middleware";

export const rocketsRouter = Router();

rocketsRouter.get("/", RocketsController.index);
rocketsRouter.get("/pagination", RocketsController.indexPage)
rocketsRouter.get("/:id", RocketsController.show);
rocketsRouter.use(ensureAuth);
rocketsRouter.post("/", verifyAuthAdmService, RocketsController.store);
rocketsRouter.delete("/:id", verifyAuthAdmService, RocketsController.delete);
rocketsRouter.patch("/:id", verifyAuthAdmService, RocketsController.update)
