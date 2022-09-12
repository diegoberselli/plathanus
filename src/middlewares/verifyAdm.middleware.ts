import { NextFunction, Request, Response } from "express";

export const verifyAuthAdmService = (
  req: Request,
  response: Response,
  next: NextFunction
) => {
  console.log(req.user);
  const { isAdm } = req.user;

  if (!isAdm) {
    response.status(401).json({ message: "Unauthorized" });
  }
  next();
};
