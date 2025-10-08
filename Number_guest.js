let min = 1
let max = 100

let ans = Math.floor(Math.random()*(max-min+1));
let guess
let istrue = true;
let attempt = 0;

while(istrue){
    guess = window.prompt("Guess your number here : ");
    guess = Number(guess);

    attempt++;

    if (isNaN(guess)){
        alert(`You have enter wrong number : ${guess}`)
    }else if (guess<min || guess>max){
        alert(`You enter the wrong number : ${guess}`)
    }else if (guess<ans){
        alert(`${guess} the number is low. please enter again : `)
    }else if (guess>ans){
        alert(`${guess} the number is high. please enter again : `)
    }else{
        alert(`${guess} is the correct number and the attempt is ${attempt} : `)
        istrue = false;
    }
}
console.log(ans)