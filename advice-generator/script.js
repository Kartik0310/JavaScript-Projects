const adviceId = document.querySelector('.advice-id');
const adviceContent = document.querySelector('.advice-content');
const diceIcon = document.querySelector('.dice-icon');


function adviceGenerator(){
    fetch('https://api.adviceslip.com/advice')
    .then((res)=>res.json())
    .then((data)=>{

        const {id , advice} = data.slip;

        adviceId.innerText = `ADVICE #${id}`;
        adviceContent.innerText = advice;

    })
}

adviceGenerator()

diceIcon.addEventListener('click', adviceGenerator);