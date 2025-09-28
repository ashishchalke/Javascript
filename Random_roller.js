let btn = document.getElementById('btn')
let roll1 = document.getElementById('Roll1');
let roll2 = document.getElementById('Roll2');
let roll3 = document.getElementById('Roll3');

let value1;
let value2;
let value3;


btn.onclick = function(){
    value1 = Math.round((Math.random()*6)+1);
    value2 = Math.round((Math.random()*6)+1);
    value3 = Math.round((Math.random()*6)+1);

    roll1.textContent = value1;
    roll2.textContent = value2;
    roll3.textContent = value3;
}