// 12. Prioridade do chamado. Leia a urgência (1 a 3) e o impacto (1 a 3) de um chamado de suporte. Classifique: urgência 3 e impacto 3 = P1 Crítico; soma 5 = P2 Alto; soma 3 ou 4 = P3 Médio; demais = P4 Baixo.

const urgency = Number(prompt("Urgência (1 a 3):"));
const impact = Number(prompt("Impacto (1 a 3):"));

const score = urgency + impact;

if (urgency === 3 && impact === 3) {
    console.log("P1 - Crítico");
} else if (score === 5) {
    console.log("P2 - Alto");
} else if (score === 3 || score === 4) {
    console.log("P3 - Médio");
} else {
    console.log("P4 - Baixo");
}