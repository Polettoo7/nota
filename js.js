function exercicio1(){
  var nota = parseInt(prompt("Digite um número"));

  while(nota < 0 || nota > 10){
    nota = parseInt(prompt("Digite novmente a nota"));
  }

  document.getElementById("root").style.display = "block"
  document.getElementById("root").innerHTML = `

    <p>A sua nota: ${nota}</p>

  `

}
