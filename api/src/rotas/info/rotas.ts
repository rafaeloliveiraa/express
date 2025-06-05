import { Router } from "express"
import { pegarAtores } from "./atores.ts"
import { pegarDiretores } from "./diretores.ts"
import { pegarGeneros } from "./generos.ts"

export const routerInfo = Router()


routerInfo.get("/generos", pegarGeneros)

routerInfo.get("/atores", pegarAtores)

routerInfo.get("/diretores", pegarDiretores)
