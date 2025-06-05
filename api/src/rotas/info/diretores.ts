import { filmes } from "../../dados/filmes.ts"
import type { Filme } from "../../model/index.ts"
import express from "express"

export function pegarDiretores(req:express.Request, res:express.Response){
    const dados = new Set(filmes.map((f: Filme)=>{
        return JSON.stringify(f.diretor)
    }))
    const arr = Array.from(dados).map(d=> JSON.parse(d as string))
    res.json(arr)
}
