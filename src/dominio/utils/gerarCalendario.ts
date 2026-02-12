export function gerarCalendario() {
  const hoje = new Date();
  const diasDaSemana = hoje.getDay();
  const dataInicio = new Date(hoje);
  dataInicio.setDate(hoje.getDate() - diasDaSemana);
  return Array.from({ length: 7 }).map((_, i) => {
    const dataDia = new Date(dataInicio);
    dataDia.setDate(dataInicio.getDate() + i); 
    return {
      nome: dataDia.toLocaleDateString("pt-BR", { weekday: "short" }).slice(0, 3),
      numero: dataDia.getDate(),
      isHoje: dataDia.toDateString() === hoje.toDateString(),
    };
  });
}