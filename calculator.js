let screen = document.getElementById('output');

// let buttons = document.getElementsByName('button')
 buttons = document.querySelectorAll('button');

let sVal = '';
for(item of buttons){
    item.addEventListener('click' , (e)=>{
        textPicked = e.target.innerText;
        console.log("button text is :" , textPicked);

        if(textPicked == 'X'){
            textPicked = '*';
            sVal += textPicked;
            screen.value = sVal;
        }
        else if(textPicked == 'AC'){
            sVal = "";
            screen.value = sVal;
        }
        else if(textPicked == '='){
           screen.value = eval(sVal);
        }
        else{
            sVal += textPicked;
            screen.value = sVal;
        }
    })
}
