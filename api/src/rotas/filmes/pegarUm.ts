import type { Filme } from "../../model/index.ts"
import { filmes } from "../../dados/filmes.ts"
import { limparCampos } from "./utils/limparCampos.ts"
import express  from "express"

export function pegarUm(req:express.Request, res:express.Response) {
    const {id} = req.params
    const {ignorar} = req.query as any
    const filme = filmes.find((f:Filme)=> f.id === id)

    if(!filme) {
        res.status(404).send('Filme não encontrado')
        return
    } 

    res.json(limparCampos(filme, ignorar))       
}