import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class SelectUser {
  async find(req: Request, res: Response) {
    const { email } = req.body;

    const select = await prismaClient.database_users.findUnique({
      where: {
        email,
      },
      select: {
        name: true,
        email: true,
      },
    });
    res.json(select);
  }
}
