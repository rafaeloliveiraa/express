import type { Filme } from "../../model/index.ts"
import { filmes } from "../../dados/filmes.ts"
import express  from "express"

export function atualizarUm(req:express.Request, res:express.Response) {
    const {id}=req.params
    const dadosAtualizados = req.body
    const indice = filmes.findIndex((f: Filme)=>f.id === id)
    if(indice === -1){
        res.status(404).send("Filme não encontrado")
        return
    }
    delete dadosAtualizados.id
    const filmeFinal = {...filmes[indice], ...dadosAtualizados}
    filmes[indice] = filmeFinal
    res.send(filmeFinal)

}