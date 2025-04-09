let emailInput = document.getElementById('emailId');
let passwordInput = document.getElementById('passwordId');
let sumbitButton = document.getElementsByTagName('button')[0];
sumbitButton.onclick=(event)=>{
    event.preventDefault();
    if (emailInput.value==='huanrose@gmail.com' && passwordInput.value==='123456'){
        alert('Thành công');
    }
    else{
        alert('Thất bại');
    }
}