import type { Filme } from "../../model/index.ts"
import { filmes } from "../../dados/filmes.ts"
import express  from "express"

export function deletarUm(req:express.Request, res:express.Response) {
    const {id} = req.params
    const indice = filmes.findIndex((f: Filme)=>f.id === id)
    if(indice === -1){
        res.status(404).send("Filme não encontrado")
        return
    }
    const filmeRemovido = filmes.splice(indice, 1)
    res.json(filmeRemovido)
}