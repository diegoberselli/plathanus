import { prisma } from "../../app";

export const PageRocketsService = async (take: number) => {
  const rockets = await prisma.rocket.findMany({
    take: take
  });

  const response: any[] = [];

  rockets.forEach((element) => {
    const { userId, ...elementResponse } = element;

    response.push(elementResponse);
  });

  return response;
};
