import { prisma } from "./../../app";
import { Rocket, User } from "@prisma/client";
import AppError from "../../errors/appError";
import { hash } from "bcryptjs";

interface IRocketResponse {
  id: string;
  username: string;
  rocket: {
    id: string;
    name: string;
    height: number;
    diameter: number;
    mass: number;
    image: string;
    userId: string;
  }[];
}

export const CreateUserService = async (
  data: User
): Promise<IRocketResponse> => {
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
    include: {
      rocket: true,
    },
  });

  const { password, ...response } = user;

  return response;
};
