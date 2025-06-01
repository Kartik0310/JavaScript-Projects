const main = document.querySelector('main');
const ratingContainer = document.querySelector('.rating-button-container');
const ratingButton = document.querySelectorAll('.rating-button');
const rating = document.querySelector('.actual-rating')
const submitBtn = document.querySelector('.submit-button');

submitBtn.addEventListener('click',()=>{
    
    main.classList.toggle('visible');
})

ratingContainer.addEventListener('click', (e)=>{
   if(e.target !== ratingContainer ){
    [...ratingContainer.children].forEach((button)=>{
        button.classList.remove('selected')
    })
   e.target.classList.add('selected');
   rating.innerText = `You selected ${e.target.innerText} out of 5`;
   }
})
