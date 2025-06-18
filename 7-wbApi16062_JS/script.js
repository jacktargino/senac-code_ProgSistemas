alert("Seja bem-vindo! A seguir, digite sua nota");

let nota = prompt("Digite sua nota");
nota = Number(nota); // Converte para número

if (nota <= 6) {
    alert("Reprovado");
} else {
    alert("Aprovado");
}

console.log(`A sua nota é: ${nota}`);