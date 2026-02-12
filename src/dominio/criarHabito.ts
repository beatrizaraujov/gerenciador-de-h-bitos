export function criarHabito(
  nome: string,
  diasDaSemana: number[]
) {
  return {
    id: crypto.randomUUID(),
    nome,
    diasDaSemana,
    criadoEm: new Date(),
    duracao: 0,   
    sequencia: 0, 
    status: false 
  }
}
