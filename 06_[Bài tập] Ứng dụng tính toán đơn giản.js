let monitor = document.getElementById('monitor');
let equal = document.getElementsByClassName('equal')[0];
let AllNumber = document.querySelectorAll('main > .number');
let AllOperator = document.querySelectorAll('.operator');
let AllOther = document.querySelectorAll('.other');
let result='';
let ex = ' '
let flag=true;
AllNumber.forEach((button)=>{
    button.addEventListener('click',()=>{
        let valueA = button.innerText;
        console.log(valueA);
        if(flag===true){
            flag=false;
            monitor.innerText = valueA;
            result = valueA;
        }
        else{
            if(result[result.length-1]==='.'||!isNaN(result[result.length-1])){
                monitor.innerText += valueA;
            }
            else{
                monitor.innerText += ex + valueA;
            }
            result += valueA;
        }

        
    })
})
AllOperator.forEach((button)=>{
    button.addEventListener('click',()=>{
        let lastChar = result[result.length-1];
        let valueO = button.innerText;
        if(valueO ==='-'){
            if(result.length===0 && flag === true){
                flag = false;
                monitor.innerText += valueO ;
                result = valueO;
            }
            else if(lastChar !== '-' && lastChar !=='.'){
                flag=false;
                monitor.innerText += ex + valueO ;
                result += valueO;
            }
            
        }
        else if(!isNaN(lastChar)){
            flag=false;
            if(valueO === 'x'){
                monitor.innerText += ex + valueO;
                result += '*';
            }
            else if(valueO === '÷' ){
                monitor.innerText += ex + valueO;
                result += '/';
            }
            else{
                monitor.innerText += ex + valueO;
                result += valueO;
            }
        
        }
        
    })
})
equal.addEventListener('click',()=>{
    if (!(isFinite(eval(result)))){
        monitor.innerText = 'Error';
        flag = true;
    }
    else if(eval(result)<0){
        monitor.innerText = '-' + ex + Math.abs(eval(result));
        flag = true;
    }
    else{
        monitor.innerText = eval(result);
        flag = true;
    }
})
AllOther.forEach((button)=>{
    button.addEventListener('click',()=>{
        let valueB = button.innerText;
        if(valueB === '.'){
            let check = result.split(/[\+\-\*\/]/);
            let curNumber = check[check.length-1];
            if(!curNumber.includes('.') && Number(curNumber)){
                monitor.innerText += valueB;
                result += valueB;
            }
        }
        if(valueB === 'C'){
            monitor.innerText ='';
            result = ''
            flag = true;
        }
    })
})
