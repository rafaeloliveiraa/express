import express from 'express'
import { configDotenv } from 'dotenv'
import { filmes } from './dados/filmes.ts'
import type { Filme } from './model/index.ts'

configDotenv()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const porta = process.env.PORTA

function limparCampos(filme: Filme, ignorar:string | undefined){
    const camposPraIgnorar = ignorar ? ignorar.toString().split(",") : []
    const copia : Partial<Filme> = {...filme}
    camposPraIgnorar.forEach((campo:string)=>{delete copia[campo as keyof Filme]})
    return copia

}

// teste
app.get('/ping', (req, res)=>{
    res.send('pong')
})
// buscar todos os filmes
app.get('/filmes', (req, res)=>{
    const { ignorar } = req.query as any
    const filmesProcessados = filmes.map((filme: Filme)=>{
        return limparCampos(filme, ignorar)
    })
    res.status(200).json(filmesProcessados)
})
// buscar filme por id
app.get('/filmes/:id', (req, res)=> {
    const {id} = req.params
    const {ignorar} = req.query as any
    const filme = filmes.find((f:Filme)=> f.id === id)

    if(!filme) {
        res.status(404).send('Filme não encontrado')
        return
    } 


    res.json(limparCampos(filme, ignorar))       
})

// cadastrar filme
app.post("/filmes", (req, res)=>{
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
})

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`)
})
