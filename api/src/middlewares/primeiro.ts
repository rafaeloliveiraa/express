import express from 'express'

export function primeiroMiddleware(req:express.Request, res:express.Response, next:express.NextFunction) {
  console.log('Primeiro middleware executado');
  // Aqui você pode adicionar lógica adicional, como validação ou manipulação de dados
  next(); // Chama o próximo middleware na cadeia
}