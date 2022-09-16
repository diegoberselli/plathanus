import { prisma } from "./../../app";
import { User } from "@prisma/client";
import AppError from "../../errors/appError";
import { hash } from "bcryptjs";

export const CreateUserService = async (data: User) => {
  const checkUser = await prisma.user.findUnique({
    where: { username: data.username },
  });

  if (checkUser) {
    throw new AppError("username already exists", 409);
  }

  const hashedPassword = await hash(data.password, 8);

  const user = await prisma.user.create({
    data: {
      username: data.username,
      password: hashedPassword,
      isAdm: data.isAdm,
    },
  });

  const { password, ...response } = user;

  return response;
};
