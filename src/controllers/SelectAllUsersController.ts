import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class SelectAllUsers {
  async handle(req: Request, res: Response) {
    const selectAll = await prismaClient.database_users.findMany({
      select: {
        email: true,
        name: true,
      },
    });

    res.json(selectAll);
  }
}
