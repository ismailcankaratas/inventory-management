import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.users.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users" });
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId, name, email } = req.body;

    const user = await prisma.users.create({
      data: {
        userId,
        name,
        email,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users" });
  }
};
