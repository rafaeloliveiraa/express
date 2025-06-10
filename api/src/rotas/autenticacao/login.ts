import express from 'express'
import jwt from 'jsonwebtoken'
import { usuarios } from '../../dados/usuarios.ts'
import type { Usuario } from '../../model/index.ts'
import bcrypt from 'bcrypt'

export function login(req:express.Request, res:express.Response){
    const {email, senha} = req.body
    const segredo = process.env.JWT_SECRET

    const usuario = usuarios.find((u:Usuario) => u.email === email)

    const senhaValida = usuario && bcrypt.compareSync(senha, usuario.senha)

    if(!usuario || !senhaValida){
        res.status(401).send('Email ou a senha é inválido')
        return
    }

    const token = jwt.sign({email}, segredo!, {expiresIn: '7d'})
    res.json({token})

}
