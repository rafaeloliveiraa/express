import express from 'express'
import { usuarios } from '../../dados/usuarios.ts'
import type { Usuario } from '../../model/index.ts'
import bcrypt  from 'bcrypt'


export function cadastrar(req:express.Request, res:express.Response){
    const {email, senha} = req.body
    
    if(!email || !senha){
        res.status(400).send('Email e senha são obrigatórios')
        return
    }
    const existente = usuarios.find((u:Usuario)=> u.email === email)

    if(existente){
        res.status(400).send(`Usuário com email ${email} já cadastrado`)
        return
    }
    // Cria um novo usuário com a senha criptografada
    const novoUsuario = {email, senha: bcrypt.hashSync(senha, 10)}
    console.log(novoUsuario)
    // Adiciona o novo usuário ao array de usuários
    usuarios.push(novoUsuario)

    res.status(201).send(`Usuário ${email} cadastrado com sucesso!`)
}
