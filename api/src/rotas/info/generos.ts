import { filmes } from "../../dados/filmes.ts"
import type { Filme, Genero } from "../../model/index.ts"
import express from "express"

export function pegarGeneros(req:express.Request, res:express.Response){
    const dados = new Set(filmes.flatMap((f: Filme)=>{
        return f.genero.map((g: Genero)=>JSON.stringify(g))
    }))
    const arr = Array.from(dados).map(g=> JSON.parse(g as string))
    res.json(arr)
}