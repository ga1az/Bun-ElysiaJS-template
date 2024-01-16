import Elysia, { t } from "elysia";
import { getAllUsers } from "./user.service";

export const UserController = new Elysia()

UserController.get("/users", async ({set}) => {
  const users = await getAllUsers()
  if(!users){
    set.status = "Not Found"
    throw new Error("No users found")
  }
  return users
})