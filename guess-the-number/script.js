(function(){
    const input = document.querySelector('input'); 
const form = document.querySelector('form');
const submitButton = document.querySelector('.submit-btn');
const startButton = document.querySelector('.start-btn');
const result = document.querySelector('.result'); 
const guessNumber = document.querySelector('.guess');

let guessArray = []

let randomValue = Math.round(Math.random() * 100)




form.addEventListener('submit',(e)=>{
    
    e.preventDefault();
    const inputValue = parseInt(input.value);  
    
    if(guessArray.length > 10){
        guessNumber.innerText = `Game Over!! The number was ${randomValue}`
        result.innerText = ''
        guessArray= []
        startButton.disabled = false;
        submitButton.disabled = true;

    }

    else if(inputValue < randomValue){
        
        result.innerText = 'Too Low!'
    }

    else if(inputValue > randomValue){
        
        result.innerText = 'Too High!'

    }

    else {
        
        result.innerText = 'You got it Congrats!!!'
        submitButton.disabled = true;
        startButton.disabled = false;
    }

    guessArray.push(inputValue);
    guessNumber.innerText = 'Your Guesses: ' + guessArray.join(', ');
    form.reset()
    
})

startButton.addEventListener('click', ()=>{
    guessNumber.innerText = ''
    result.innerText = ''
    guessArray = []
    startButton.disabled = true;
    input.focus();
    submitButton.disabled = false;
    randomValue = Math.round(Math.random() * 100)


})


}) ()