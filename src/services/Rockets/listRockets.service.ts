import { prisma } from "../../app";

export const ListRocketsService = async () => {
  const rockets = await prisma.rocket.findMany({});

  const response: any[] = [];

  rockets.forEach((element) => {
    const { userId, ...elementResponse } = element;

    response.push(elementResponse);
  });

  return response;
};
