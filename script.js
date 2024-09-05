let container = document.querySelector("#container");
let btn = document.querySelector("#btn");

function randomNum () {
   return Math.floor(Math.random() * 255);
}

btn.addEventListener('click', () => {
    container.innerHTML = ""; 
    gridNum = prompt("How many squares you want to draw on?", 9);
    for (let i = 1; i < gridNum; i++) {
        container.appendChild(document.createElement('div'));
    } 
});


container.addEventListener('mouseover', (event) => {
    target = event.target;
    if (event.target.id !== "container"){  
        if (target.style.opacity === '') {
            target.style.opacity = "0";
        };  
        if (target.style.backgroundColor === ''){
            target.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
        };
        target.style.opacity = Number(target.style.opacity) + 0.1;
    };
})

// CHANGE PROPERTY OF DIV AND SAVE IT SO YOU CAN CHANGE FROM CHANGED VALUE BEFORE 