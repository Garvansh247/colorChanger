const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        const color = window.getComputedStyle(e.target).backgroundColor; // instead of e.target.id we can also use this to get the color as it's more dynamic previously we were using id attribute to get the color but that is not a good practice as id string then has to match the color name exactly
        // getComputedStyle(element) method gets all the actual CSS properties and values applied to an element
        body.style.backgroundColor = color;
    });
});