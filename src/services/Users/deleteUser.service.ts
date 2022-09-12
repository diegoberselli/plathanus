import AppError from "../../errors/appError";
import { prisma } from "./../../app";

export const DeleteUserService = async (id: string) => {
  const user = await prisma.user.findUnique({ where: { id } });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  await prisma.user.delete({ where: { id } });
};
