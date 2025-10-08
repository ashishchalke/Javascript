let Sub = document.getElementById('sub');
let Sub_val = document.getElementById('sub_val')

let Visa = document.getElementById('vis');
let Vis_val = document.getElementById('vis_val');

let Master = document.getElementById('mast');
let Mast_val = document.getElementById('vis_val');

let Pay = document.getElementById('pay');
let Pay_val = document.getElementById('pay_val');

let Btn = document.getElementById('btn');

Btn.onclick = function(xyz){
    xyz.preventDefault()
    if (Sub.checked){
        Sub_val.textContent = `You are welcome`;
    }else{
        Sub_val.textContent = `You are not welcome`;
    }
    
    if (Visa.checked){
        Vis_val.textContent = `You are paying through visa`;
    }

    if (Master.checked){
        Mast_val.textContent = `You are paying through master card`;
    }

    if (Pay.checked){
        Mast_val.textContent = `You are paying through Paypal`
    }
}

