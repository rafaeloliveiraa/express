import { Router } from "express"
import { atualizarUm } from "./atualizarUm.ts"
import { criarUm } from "./criarUm.ts"
import { deletarUm } from "./deletarUm.ts"
import { pegarTodos } from "./pegarTodos.ts"
import { pegarUm } from "./pegarUm.ts"
import { jwtMiddleware } from "../../middlewares/jwt.ts"

export const routerFilmes = Router()

// buscar todos os filmes
routerFilmes.get('/', pegarTodos)
// buscar filme por id
routerFilmes.get('/:id', pegarUm)
// cadastrar filme
routerFilmes.post("/", jwtMiddleware, criarUm)
// atualizar filme por id
routerFilmes.patch("/:id", jwtMiddleware, atualizarUm)
// deletar filme por id
routerFilmes.delete("/:id", jwtMiddleware, deletarUm)