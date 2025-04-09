let bodyBg = document.querySelector('body');
let boxBg = document.querySelectorAll('.box');
let boxBgYellow = document.querySelector('.yellow');
let boxBgGreen = document.querySelector('.green');
let boxBgGray = document.querySelector('.gray');
const changeBgColor = (color)=>{
    bodyBg.classList.remove('gray','green','yellow');
    bodyBg.classList.add(color);
}
boxBgYellow.addEventListener('mouseover',()=>{
    changeBgColor('yellow')
    
})
boxBgGreen.addEventListener('mouseover',()=>{
    changeBgColor('green')
})
boxBgGray.addEventListener('mouseover',()=>{
    changeBgColor('gray')
})
boxBg.forEach(el => el.addEventListener('mouseleave',()=>{changeBgColor()}))

