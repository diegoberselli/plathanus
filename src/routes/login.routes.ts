import { Router } from "express";
import LoginController from "../controllers/Login.controller";

export const loginRouter = Router();

loginRouter.post("/", LoginController.store);
