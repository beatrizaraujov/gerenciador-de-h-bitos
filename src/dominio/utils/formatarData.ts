export function formatarData() {
    const dias = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    
    // 1. Pegamos os números (os índices)
    const indiceSemana = new Date().getDay();
    const numeroDia = new Date().getDate();
    const indiceMes = new Date().getMonth();

    // 2. "Pescamos" as palavras nas listas usando os índices
    const diaPorExtenso = dias[indiceSemana];
    const mesPorExtenso = meses[indiceMes];

    // 3. Montamos a frase final (O PRODUTO DA FÁBRICA)
    return `${diaPorExtenso}, ${numeroDia} de ${mesPorExtenso}`;
}