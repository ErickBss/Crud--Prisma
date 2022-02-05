import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class DeleteUser {
  async handle(req: Request, res: Response) {
    const { email } = req.body;

    const deleteUser = await prismaClient.database_users.delete({
      where: {
        email,
      },
    });
    res.json(deleteUser);
  }
}
