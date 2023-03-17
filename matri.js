var linha_atual = [];

var matriz = [
    ["Banana", "Maçã"], // Linha 1 com 2 colunas
    ["Cheiro verde", "Uva", "Açafrão", "Morango"], // Linha 2 com 2 colunas
    ["Bife", "Legume", "Gás"] // Linha 3 com 2 colunas
];

for (L = 0; L <= matriz.length; L++) {
    console.log(`Linha: ${L}\nElementos Coluna: ${matriz[L].length}\n`);
    for (C = 0; C < matriz[L].length; C++) {
        linha_atual.push(matriz[L][C]);
    }
    console.log(`Elemento adicionado: ${linha_atual}`);
    linha_atual.splice(0, linha_atual.length);
}

