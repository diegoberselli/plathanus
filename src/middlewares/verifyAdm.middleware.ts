import { NextFunction, Request, Response } from "express";

export const verifyAuthAdmService = (
  req: Request,
  response: Response,
  next: NextFunction
) => {
  const { isAdm } = req.user;

  if (!isAdm) {
    response.status(401).json({ message: "Unauthorized" });
  }
  next();
};
