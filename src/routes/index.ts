import { rocketsRouter } from "./rockets.routes";
import { loginRouter } from "./login.routes";
import { Router } from "express";
import { userRouter } from "./user.routes";

const routes = Router();

routes.use("/users", userRouter);
routes.use("/login", loginRouter);
routes.use("/rockets", rocketsRouter);

export default routes;
