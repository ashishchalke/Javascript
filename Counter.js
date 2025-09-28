let count = 0;
const Increase = document.getElementById('Increase');
const Decrease = document.getElementById('Decrease');
const Reset = document.getElementById('Reset');



Increase.onclick = function(){
    count = count + 1;
    document.getElementById('values').textContent = count;
}


Decrease.onclick = function(){
    if (count>0){
        count = count - 1
    }else{
        count = 0;
    }
    
    document.getElementById('values').textContent = count;
}


Reset.onclick = function(){
    count = 0;
    document.getElementById('values').textContent = count;
}