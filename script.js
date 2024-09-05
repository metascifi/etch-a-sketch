let container = document.querySelector("#container");
let btn = document.querySelector("#btn");
let gridNum = 0;

btn.addEventListener('click', () => {
    gridNum = prompt("How many squares you want to draw on?", 9);
    for (let i = 1; i < gridNum; i++) {
        container.appendChild(document.createElement('div'));
    } 
});


container.addEventListener('mouseover', (event) => {
    if (event.target.id !== "container"){
        target = event.target;
        target.style.backgroundColor = "blue";
    };

})

