import { Request, Response } from "express";
import { CreateUserService } from "../services/Users/createUser.service";
import { DeleteUserService } from "../services/Users/deleteUser.service";
import { ListUserService } from "../services/Users/listUser.service";

export default class UsersController {
  
  static async store(req: Request, res: Response) {
    const data = req.body;
    const user = await CreateUserService(data);

    return res.status(201).json(user);
  }

  static async index(req: Request, res: Response) {
    const users = await ListUserService();

    return res.status(200).json(users);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    await DeleteUserService(id);

    return res.status(204).json();
  }
}
