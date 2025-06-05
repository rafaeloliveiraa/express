import { Router } from "express"
import { login } from "./login.ts"

export const routerAuth = Router()

routerAuth.post("/login", login)