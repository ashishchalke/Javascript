let circum;
let rad
let Rad;
document.getElementById('Button').onclick = function(){
    const PI = 3.1459;
 
    Rad = document.getElementById('radius').value;
    circum = 2 * PI * Rad

    document.getElementById('Output').textContent = circum.toFixed(2) + 'Cm';
}