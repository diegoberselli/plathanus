import AppError from "../../errors/appError";
import { prisma } from "./../../app";

export const DeleteRocketService = async (id: string) => {
  const rocket = await prisma.rocket.findUnique({ where: { id } });

  if (!rocket) {
    throw new AppError("Rocket not found", 404);
  }

  await prisma.rocket.delete({ where: { id } });
};
