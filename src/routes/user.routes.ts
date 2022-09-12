import { Router } from "express";
import UsersController from "../controllers/Users.controller";
import { ensureAuth } from "../middlewares/ensureAuth.middleware";
import { verifyAuthAdmService } from "../middlewares/verifyAdm.middleware";

export const userRouter = Router();

userRouter.post("/", UsersController.store);
userRouter.get("/", UsersController.index);

userRouter.use(ensureAuth);
userRouter.delete("/:id", verifyAuthAdmService, UsersController.delete);
