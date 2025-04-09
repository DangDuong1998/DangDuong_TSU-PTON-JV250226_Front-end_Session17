let text = document.getElementsByTagName('h2')[0];
let hideText = document.getElementsByTagName('button')[0];
let showText = document.getElementsByTagName('button')[1];
hideText.onclick = () => {text.style.display='none'};
showText.onclick = () => {text.style.display='block'};
