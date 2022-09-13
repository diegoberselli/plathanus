import { ListOneRocket } from "./../services/Rockets/listOneRocket.service";
import { ListRocketsService } from "./../services/Rockets/listRockets.service";
import { CreateRocketService } from "./../services/Rockets/createRocket.service";
import { query, Request, Response } from "express";
import { DeleteRocketService } from "../services/Rockets/deleteRocket.service";
import { request } from "http";
import { UpdateRocketService } from "../services/Rockets/updateRocket.service";
import { PageRocketsService } from "../services/Rockets/paginationRocket.service";

export default class RocketsController {
  static async store(req: Request, res: Response) {
    const data = req.body;
    const id = req.user.id;
    const rocket = await CreateRocketService(data, id);

    return res.status(201).json(rocket);
  }

  static async index(req: Request, res: Response) {
    const users = await ListRocketsService();

    return res.status(200).json(users);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    await DeleteRocketService(id);

    return res.status(204).json();
  }

  static async show(req: Request, res: Response) {
    const { id } = req.params;

    const rocket = await ListOneRocket(id);

    return res.status(200).json(rocket);
  }

  static async update(req: Request, res: Response) {
    const data = req.body;
    const { id } = req.params;

    const updateRocket = await UpdateRocketService(id, data);

    return res.status(200).json(updateRocket);
  }

  static async indexPage(req: Request, res: Response) {
    const {take} = req.query

    const users = await PageRocketsService(Number(take));

    return res.status(200).json(users);
  }
}
