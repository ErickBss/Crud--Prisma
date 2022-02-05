import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class UpdateUser {
  async handle(req: Request, res: Response) {
    const { name, email } = req.body;

    const updateUser = await prismaClient.database_users.update({
      where: {
        email,
      },
      data: {
        name,
      },
    });
    res.json(updateUser);
  }
}
