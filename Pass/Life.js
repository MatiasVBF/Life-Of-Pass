const emocoes = {
    alegria: ["feliz", "contente", "alegre", "animado"],
    tristeza: ["triste", "deprimido", "desanimado"],
    medo: ["assustado", "apavorado", "temeroso"],
    surpresa: ["surpreso", "chocado", "admirado"],
    raiva: ["irritado", "furioso", "bravo"],
    nojo: ["enojado", "repugnado", "desgostoso"]
};
function avaliarEmocoes(texto) {
    const pontuacaoEmocoes = {
        alegria: 0,
        tristeza: 0,
        medo: 0,
        surpresa: 0,
        raiva: 0,
        nojo: 0
    };

    const palavras = texto.toLowerCase().split(/\W+/);

    palavras.forEach(palavra => {
        for (const [emocao, palavrasAssociadas] of Object.entries(emocoes)) {
            if (palavrasAssociadas.includes(palavra)) {
                pontuacaoEmocoes[emocao]++;
            }
        }
    });

    return pontuacaoEmocoes;
}

const texto = "Estou muito feliz e animado hoje, mas também um pouco assustado com a prova.";
const resultado = avaliarEmocoes(texto);

console.log(resultado);
