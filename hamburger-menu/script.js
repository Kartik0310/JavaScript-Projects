const hamburgerIcon = document.querySelector('.hamburger-menu');
const headerContent = document.querySelector('.header');
const closeIcon = document.querySelector('.close-icon')


hamburgerIcon.addEventListener('click',(e)=>{
    e.stopPropagation();
    headerContent.classList.add('menu-open')
})

closeIcon.addEventListener('click',(e)=>{
    headerContent.classList.remove('menu-open');
})

window.addEventListener('click',()=>{
    headerContent.classList.remove('menu-open')
})