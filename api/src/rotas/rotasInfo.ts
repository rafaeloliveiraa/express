import { filmes } from "../dados/filmes"
import type { Ator, Filme, Genero } from "../model"
import { Router } from "express"

export const routerInfo = Router()


routerInfo.get("/info/generos", (req, res)=>{
    const dados = new Set(filmes.flatMap((f: Filme)=>{
        return f.genero.map((g: Genero)=>JSON.stringify(g))
    }))
    const arr = Array.from(dados).map(g=> JSON.parse(g as string))
    res.json(arr)
})

routerInfo.get("/info/atores", (req, res)=>{
    const dados = new Set(filmes.flatMap((f: Filme)=>{
        return f.elenco.map((a: Ator)=> JSON.stringify(a))
    }))
    const arr = Array.from(dados).map(a=> JSON.parse(a as string))
    res.json(arr)
})

routerInfo.get("/info/diretor", (req, res)=>{
    const dados = new Set(filmes.map((f: Filme)=>{
        return JSON.stringify(f.diretor)
    }))
    const arr = Array.from(dados).map(d=> JSON.parse(d as string))
    res.json(arr)
})
