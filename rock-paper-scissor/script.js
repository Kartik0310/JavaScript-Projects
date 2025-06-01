const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorBtn = document.querySelector('.scissor-btn'); 
const result = document.querySelector('.result');
const computerScore = document.querySelector('.computer-score');
const userScore = document.querySelector('.user-score');


const userHandIcon = document.querySelector('.user-hand > span');
const computerHandIcon = document.querySelector('.computer-hand > span');

const rockIcon = '✊';
const paperIcon = '✋';
const scissorIcon = '✌️';  

const iconList = [rockIcon, paperIcon, scissorIcon];

function calculateResult (selectedIcon , winningIcon) {
    
    result.innerText = '';
    userHandIcon.innerText = '🤜';
    computerHandIcon.innerText = '🤛';
    userHandIcon.classList.add('shakeUserHands');
    computerHandIcon.classList.add('shakeComputerHands');
    
    setTimeout(()=>{
        userHandIcon.classList.remove('shakeUserHands');
        computerHandIcon.classList.remove('shakeComputerHands');
        userHandIcon.innerText = selectedIcon;
        
        const computerChoice = Math.floor(Math.random() * 3);
        computerHandIcon.innerText = iconList[computerChoice];

        if(userHandIcon.innerText === computerHandIcon.innerText){
            result.innerText = 'Draw';
        } else if(computerHandIcon.innerText === winningIcon){
            result.innerText = 'Computer Won!!!';
            computerScore.innerText = +computerScore.innerText + 1;
        } else{
            result.innerText = 'You Won!!!';
            userScore.innerText = +userScore.innerText + 1;
        }
        // if(randomNumber === 0){
        //     computerHandIcon.innerText = rockIcon;
        // } else if(randomNumber === 1){
        //     computerHandIcon.innerText = paperIcon;
        // } else{
        //     computerHandIcon.innerText = scissorIcon;
        // }

    },1000);
}


rockBtn.addEventListener('click', ()=>{
    calculateResult(rockIcon ,paperIcon);
    
})

paperBtn.addEventListener('click', ()=>{
    calculateResult(paperIcon, scissorIcon);
})


scissorBtn.addEventListener('click', ()=>{
    calculateResult(scissorIcon, rockIcon);
})