import { prisma } from "../../app";
import AppError from "../../errors/appError";

export const ListOneRocket = async (id: string) => {
  const rocket = await prisma.rocket.findUnique({ where: { id } });

  if (!rocket) {
    throw new AppError("Rocket not found", 404);
  }

  const { userId, ...response } = rocket;

  console.log(response);
  return response;
};
