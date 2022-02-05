import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateUser {
  async handle(req: Request, res: Response) {
    //   push the information from the request
    const { name, email } = req.body;
    if (email == "" || name == "") {
      res.json("Invalid Information");
    } else {
      const create = await prismaClient.database_users.create({
        data: {
          name,
          email,
        },
      });
      res.json(create);
    }
  }
}
