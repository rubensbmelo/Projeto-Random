function generateNumber() {
    // 1. Pegamos os valores dos inputs
    const min = Math.ceil(document.querySelector(".entre").value);
    const max = Math.floor(document.querySelector(".e").value);

    // 2. Validação simples: verificar se os campos estão vazios ou se o min é maior que o max
    if (min >= max) {
        alert("O valor MÍNIMO deve ser MENOR que o valor MÁXIMO!");
        return; // Para a função aqui
    }

    // 3. A lógica do sorteio (Corrigindo o nome da variável)
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    // 4. Mostrando o resultado
    alert(`O número sorteado foi: ${result}`);
}