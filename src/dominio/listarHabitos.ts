import { Habito } from "./entidades/Habito"; // Importe o tipo correto

// Adicionamos o 'export' aqui para que o arquivo de salvar consiga ver essa lista
export const habitos: Habito[] = []; 

export function listarHabitos(): Habito[] {
  return habitos;
}