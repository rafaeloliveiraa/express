import express from 'express'
import { configDotenv } from 'dotenv'
import { routerFilmes } from './rotas/filmes/rotas.ts'
import { routerInfo } from './rotas/info/rotas.ts'
import { primeiroMiddleware } from './middlewares/primeiro.ts'

configDotenv()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(primeiroMiddleware) // Middleware personalizado
// app.use('/filmes', primeiroMiddleware, routerFilmes) também pode ser usado assim
app.use('/filmes', routerFilmes)
app.use('/info', routerInfo)

const porta = process.env.PORTA
// teste
app.get('/ping', (req, res)=>{
    res.send('pong')
})

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`)
})
