let buttonOpenModal= document.getElementsByTagName('button')[0];
let modal = document.getElementsByTagName('div')[0];
let closeButton = document.getElementsByTagName('h2')[0];
let allMain = document.querySelector('main');

buttonOpenModal.onclick = () => {
    modal.classList.remove('toggle');
    buttonOpenModal.classList.toggle('no_select');
    allMain.classList.toggle('gray')
};
closeButton.onclick = () =>{
    modal.classList.add('toggle');
    buttonOpenModal.classList.toggle('no_select');
    allMain.classList.toggle('gray')
    
}