import { Router } from "express";
import { createUser, getUsers } from "../controllers/usersController";

const userRoutes = Router();

userRoutes.get("/", getUsers);
userRoutes.post("/", createUser);

export default userRoutes;
