import { LoginService } from "./../services/Login/login.service";
import { Request, Response } from "express";

export default class LoginController {
  static async store(req: Request, res: Response) {
    const { username, password } = req.body;

    const auth = await LoginService(username, password);

    const response = {
      token: auth.token,
    };
    return res.status(200).json(response);
  }
}
