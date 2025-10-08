let Cel = document.getElementById('Cel');
let Fah = document.getElementById('Fah');
let Out = document.getElementById('Output');
let BTN = document.getElementById('BTN')
let Val = document.getElementById('Value')


function Temperature(event){
    event.preventDefault()
    let Num = Number(Val.value);

    if (Cel.checked){
        let c = (Num- 32)* (5/9);
        Out.textContent = c + " °F";
    }else if (Fah.checked){
        let c = (Num * 9/5) + 32;
        Out.textContent = c + " °C";
    }else{
        Out.textContent = "The Output";
    }
}

BTN.addEventListener('click',Temperature)