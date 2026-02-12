import { criarHabito } from "./criarHabito"
import { salvarHabito } from "./salvarHabito"

export function cadastrarHabito(
  nome: string,
  diasDaSemana: number[]
) {
  const habito = criarHabito(nome, diasDaSemana)
  salvarHabito(habito)
}