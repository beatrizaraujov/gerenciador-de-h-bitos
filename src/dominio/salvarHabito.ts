import { Habito } from "./entidades/Habito"; // Importa o molde
import { habitos } from "./listarHabitos";    // Importa a lista única que você exportou de lá

export function salvarHabito(habito: Habito): void {
  // Agora ele empurra o hábito para a lista compartilhada
  habitos.push(habito);
}