function changeMode(){
  changeClasses()
}

function changeClasses(){
button.classList.toggle('dark-mode');
titulo.classList.toggle('dark-mode');
body.classList.toggle('dark-mode');
footer.classList.toggle('dark-mode');
}

const button = document.getElementById("botao");
const titulo = document.getElementById("estado");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];

button.addEventListener('click',changeMode);