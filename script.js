// chama as outras funções
function changeMode(){
  changeClasses();
  changeText();
}


// alterna as classes entre os elementos
function changeClasses(){
button.classList.toggle('dark-mode');
button.classList.toggle('tamanho');
titulo.classList.toggle('dark-mode');
body.classList.toggle('dark-mode');
footer.classList.toggle('dark-mode');
}

// faz as atualizações dos conteudos
function changeText(){
  const lightMode = "Light Mode"
  const darkMode = "Dark Mode"
  if(body.classList.contains('dark-mode')){
    button.value ="Dark Mode"
    titulo.innerHTML = lightMode + " ON";
    return;
  }
  button.value ="Light Mode"
    titulo.innerHTML = darkMode + ' ON';
}

// referenciando os elementos do html
const button = document.getElementById("botao");
const titulo = document.getElementById("estado");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];

// evento de click onde é chamada a primeira função la de cima
button.addEventListener('click',changeMode);