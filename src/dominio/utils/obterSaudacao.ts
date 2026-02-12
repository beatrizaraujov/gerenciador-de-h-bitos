import { Usuario } from "../entidades/Usuario";

 export function obterSaudacao(usuario: Usuario){
    const nome = usuario.name;
    const horaAtual = new Date().getHours();
    if(horaAtual < 12){
        return `Bom dia, ${nome}`
    } else if(horaAtual < 18){
        return `Boa tarde, ${nome}`
    }
    else{
        return `Boa noite, ${nome}`
    }
}