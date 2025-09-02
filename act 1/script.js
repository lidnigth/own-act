function calcular() {
    const preco = parseFloat(document.getElementById("preco").value);
    const desconto = parseFloat(document.getElementById("desconto").value);

    if (isNaN(preco) || isNaN(desconto)) {
        document.getElementById("resultado").innerText = "Preencha corretamente";
        return;
    }

    const valorFinal = preco - (preco * desconto / 100);
    document.getElementById("resultado").innerText = `Preço com desconto: R$ ${valorFinal.toFixed(2)}`;
}