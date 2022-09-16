import cors from "cors";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import AppError from "./errors/appError";
import { PrismaClient } from "@prisma/client";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";

import swaggerDocs from "./swagger.json";

process.on("SIGTERM", () => {
  process.exit();
});

export const app = express();

export const prisma = new PrismaClient();
app.use(cors());
app.use(express.json());
app.use(routes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  console.log(err);
  return res.status(500).json({ message: "Internal server error" });
});

app.get("/", (req: Request, res: Response) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "Ok, running",
    timestamp: Date.now(),
  };
  res.send(healthcheck);
});
