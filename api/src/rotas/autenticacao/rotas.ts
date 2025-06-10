import { Router } from "express"
import { login } from "./login.ts"
import { cadastrar } from "./cadastrar.ts"

export const routerAuth = Router()

routerAuth.post("/login", login)
routerAuth.post("/cadastrar", cadastrar)