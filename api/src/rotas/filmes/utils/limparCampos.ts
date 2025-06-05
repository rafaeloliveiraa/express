import type { Filme } from "../../../model/index.ts"

export function limparCampos(filme: Filme, ignorar:string | undefined){
    const camposPraIgnorar = ignorar ? ignorar.toString().split(",") : []
    const copia : Partial<Filme> = {...filme}
    camposPraIgnorar.forEach((campo:string)=>{delete copia[campo as keyof Filme]})
    return copia

}