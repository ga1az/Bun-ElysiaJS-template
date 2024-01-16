import Elysia from "elysia";
import { UserController } from "./modules/user/user.controller";

export const httpV1 = new Elysia({prefix: "/v1"})

httpV1.use(UserController)