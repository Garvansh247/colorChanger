const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        const color = window.getComputedStyle(e.target).backgroundColor;
        body.style.backgroundColor = color;
    });
});