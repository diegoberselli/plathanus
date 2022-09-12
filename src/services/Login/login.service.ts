import { compare } from "bcryptjs";
import AppError from "../../errors/appError";
import { authConfig } from "../../configs/auth";
import { prisma } from "../../app";
import { sign } from "jsonwebtoken";

export const LoginService = async (username: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: { username: username },
    include: { rocket: true },
  });

  if (!user) {
    throw new AppError("Wrong username/password", 401);
  }

  const passMatch = await compare(password, user.password);

  if (!passMatch) {
    throw new AppError("Wrong username/password", 401);
  }

  const { secret, expiresIn } = authConfig.jwt;

  const token = sign({ isAdm: user.isAdm }, secret, {
    subject: user.id,
    expiresIn,
  });

  return {
    token,
  };
};
