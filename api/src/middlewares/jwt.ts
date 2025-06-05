import express from 'express'
import jwt from "jsonwebtoken"

export function jwtMiddleware(req:express.Request, res:express.Response, next:express.NextFunction) {
  const token = req.headers["authorization"]?.split(" ")[1]

  if(!token){
    res.status(401).send("Usuário não está logado")
    return
  }

  try{
    const segredo = process.env.JWT_SECRET
    const payload = jwt.verify(token, segredo!)
    console.log(payload)
  }catch(error){
    res.status(401).send("Faça login novamente")
    return
  }
  console.log(token)
  next() 
}
