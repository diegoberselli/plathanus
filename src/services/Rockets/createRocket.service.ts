import { Rocket, User } from "@prisma/client";
import { prisma } from "../../app";
import AppError from "../../errors/appError";

interface ICreateRocket extends Rocket {
  user: User;
}

export const CreateRocketService = async (data: ICreateRocket, id: string) => {
  const rocket = await prisma.rocket.create({
    data: {
      name: data.name,
      description: data.description,
      height: data.height,
      diameter: data.diameter,
      image: data.image,
      mass: data.mass,
      userId: id,
    },
  });

  if (!rocket) {
    throw new AppError("You dont have access ", 404);
  }

  return rocket;
};
