import { prisma } from "../../app";

export const PageRocketsService = async (take: number, skip: number) => {
  const rockets = await prisma.rocket.findMany({
    take,
    skip,
  });

  const response: any[] = [];

  rockets.forEach((element) => {
    const { userId, ...elementResponse } = element;

    response.push(elementResponse);
  });

  return response;
};
