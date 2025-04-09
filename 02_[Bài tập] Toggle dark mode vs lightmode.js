let text = document.querySelectorAll('.text');
let button = document.getElementsByTagName('button')[0];
let background = document.querySelector('body')
let flag=true;
button.onclick = () => {
    if(flag===true){
        flag = false;
        text.forEach(el=>el.style.color='white');
        background.style.backgroundColor='black';
    }
    else{
        flag = true;
        text.forEach(el=>el.style.color='black');
        background.style.backgroundColor='white';
    }
    
}
