// traversing the dom
// const allButton = document.querySelectorAll('.button');


// allButton.forEach((button)=>{
//     button.addEventListener('click', (e)=>{
//         const parentElement = e.currentTarget.parentElement.parentElement;
//         parentElement.classList.toggle('open')
        
//     })
// })


const questions = document.querySelectorAll('.faq-content');

questions.forEach((question)=>{
    const btn = question.querySelector('.button');
    btn.addEventListener('click',()=>{
        questions.forEach((item)=>{
            if(item !== question){
                item.classList.remove('open')
            }
        })
      
        question.classList.toggle('open');
    })
})

