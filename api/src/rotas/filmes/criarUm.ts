import type { Filme } from "../../model/index.ts"
import { filmes } from "../../dados/filmes.ts"
import express  from "express"

export function criarUm(req:express.Request, res:express.Response) {
    const novoFilme: Filme = req.body
    if(!(novoFilme.ano && novoFilme.diretor && novoFilme.elenco && novoFilme.genero && novoFilme.sinopse && novoFilme.titulo)) {
        res.status(400).send("Dados enviados são inválidos")
        return
    }
    const aleatorio = (Math.random() * 100) | 0
    const id = `FIL1${aleatorio}`
    novoFilme.id = id
    filmes.push(novoFilme)
    res.status(201).json(novoFilme)
}