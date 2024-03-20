const corpoTabela = document.querySelector("tbody");
const mensagem = document.querySelector("p.message");
const autor_frase = document.querySelector(".author");
const frases = [
  {
    frase: "Nossas dúvidas são traidoras e nos fazem perder o que, com frequência, poderíamos ganhar, por simples medo de arriscar.",
    autor: "Shakespeare, 1507",
  },
  {
    frase: `"Só parte pra agressão quem não se garante na sinuca"`,
    autor: `Agostinho Carrara, 1806`,
  },
  {
    frase: `"O mundo é grande e cabe nesta janela sobre o mar. O mar é grande e cabe na cama e no colchão de amar. O amor é grande e cabe no breve espaço de beijar."`,
    autor: `Carlos Drummond de Andrade`,
  },
  {
    frase: `"Quando você olha muito tempo para um abismo, o abismo olha para você.`,
    autor: "Friedrich Nietzsche",
  },
];

function inteiroAleatorio(max) {
  return Math.floor(Math.random() * max);
}

corpoTabela.addEventListener("mouseenter", (e) => {
  document.querySelector(".message-area").style.opacity = "100";
  const n = inteiroAleatorio(4)
  const frase =  frases[n].frase;
  const autor = frases[n].autor;
  console.log(n)
  console.log(autor)
  console.log(frase)
  mensagem.innerText = frase
  autor_frase.innerText = autor
});

corpoTabela.addEventListener("mouseleave", (e) => {
  document.querySelector(".message-area").style.opacity = "0";
  console.log("Saiu");
});
