'use strict';

const h1 = document.querySelector('h1');
const btn = document.querySelector('a');

let counter = 0;


btn.addEventListener('click', () => {
    
    if(counter % 2 === 0){
        h1.innerHTML = "liczba nieparzysta"
    }
    else{
        h1.innerHTML = "liczba parzysta"
    }
    
    counter++;
    console.log(counter)
});
