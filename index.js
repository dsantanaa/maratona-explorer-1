 
 const resposta = document.querySelector("#resposta")
 const inputPergunta = document.querySelector("#inputPergunta")
 const buttonPerguntar = document.querySelector("#buttonPerguntar")

  const respostas = [ 
    "Não",
    "Provavelmente",
    "Sim",
    "Certeza",
    "Não tenho tanta certeza",
    "Não conte com isso",
    "Sem dúvidas",
    "Pergunte novamente mais tarde",
    "Sim, definitivamente",
    "Minha resposta é não",
    "Melhor não te dizer agora",
    "A meu ver, sim.",
    "Você pode contar com isso",
    "Minhas fontes dizem que não",
    "Não é possível prever agora",
    "Perspectiva boa",
    "As perspectivas não são tão boas",
    "Concentre-se e pergunte novamente",
    "Sinais apontam que sim"
  ]
 
 function fazerPergunta() {
   if(inputPergunta.value == ""){
     alert("Digite a sua pergunta")
     return
   }
   buttonPerguntar.setAttribute("disabled", true)
   const pergunta = "<div>" + inputPergunta.value + "</div>"
  
    const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
  
  resposta.innerHTML = pergunta + respostas[numeroAleatorio]

  resposta.style.opacity = 1;

  setTimeout(function() { 
resposta.style.opacity = 0;
buttonPerguntar.removeAttribute('disabled')
}, 3000)
 
  }