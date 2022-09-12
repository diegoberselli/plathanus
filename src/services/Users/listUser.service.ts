import { prisma } from "../../app";

export const ListUserService = async () => {
  const users = await prisma.user.findMany({});

  const response: any[] = [];

  users.forEach((element) => {
    const { password, ...elementResponse } = element;

    response.push(elementResponse);
  });

  return response;
};
