import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { prisma } from "../app";
import { authConfig } from "../configs/auth";
import AppError from "../errors/appError";

interface TokenPayload {
  iat: number;
  expr: number;
  sub: string;
  isAdm: Boolean;
}

export const ensureAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("Missing authorization token");
  }

  try {
    const [_, token] = authHeader.split(" ");
    const { secret } = authConfig.jwt;

    const decoded = verify(token, secret);

    const { sub, isAdm } = decoded as TokenPayload;

    req.user = {
      id: sub,
      isAdm,
    };

    return next();
  } catch (error) {
    throw new AppError("Invalid Token");
  }
};
