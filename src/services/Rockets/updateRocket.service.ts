import { Rocket } from "@prisma/client";
import AppError from "../../errors/appError";
import { prisma } from "./../../app";


export const UpdateRocketService = async (id: string, data: Partial<Rocket>) => {
  const rocket = await prisma.rocket.findUnique({ where: { id } });

  if (!rocket) {
    throw new AppError("Rocket not found", 404);
  }

  const updateRocket = await prisma.rocket.update({
    where: {
      id,
    },
    data,
  });

  return updateRocket
};
