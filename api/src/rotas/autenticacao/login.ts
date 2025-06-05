import express from 'express'
import jwt from 'jsonwebtoken'

export function login(req:express.Request, res:express.Response){
    const {email, senha} = req.body
    const segredo = process.env.JWT_SECRET

    const emailFinal = 'ana@mail.com.br'
    const senhaFinal = '123456'

    if( email !== emailFinal || senha !== senhaFinal ){
        res.status(401).send('Email ou a senha é inválido')
        return
    }

    const token = jwt.sign({email}, segredo!, {expiresIn: '1hr'})
    res.json({token})

}
