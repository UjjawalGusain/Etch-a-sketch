const gridContainer = document.querySelector('.grid-container');
const button = document.querySelector(".button");
const submitButton = document.querySelector('.submit-button');
var input = document.querySelector("input");
// var display = document.querySelector(".display");
// var noDisplay = document.querySelector(".no-display");
var n = 16;
var result;
var randomQuote = document.querySelector(".random-quote");
button.addEventListener('click', promptMenuAppear);

getRandomQuote();
submitButton.addEventListener('click', getPixelFromUser);

function promptMenuAppear(){
    input.classList.toggle("no-display");
    input.classList.toggle("display");
    submitButton.classList.toggle("submit-button-display");
}
var rowGrid, columnGrid;
generateGrids();
function generateGrids(){

    for(let row = 1; row<=n; row++)
    {
        rowGrid = document.createElement('div');
        rowGrid.classList.add('row-grid-box');
        gridContainer.appendChild(rowGrid);
        for(let column = 1; column<=n; column++)
        {
            columnGrid = document.createElement('div');
            columnGrid.classList.add('column-grid-box');
            rowGrid.appendChild(columnGrid);

        }
    }

}



gridContainer.addEventListener('click', () => {
    
        gridContainer.addEventListener('mouseover', (e) =>{
            e.preventDefault();
            
            if(!e.target.classList.contains('column-grid-box'))
                return;
        
            e.target.style.backgroundColor = 'black';
        });
    
});
    
gridContainer.addEventListener('dblclick', () => {
    
    gridContainer.addEventListener('mouseover', (e) =>{
        e.preventDefault();
        
        if(!e.target.classList.contains('column-grid-box'))
            return;
    
        e.target.style.backgroundColor = '#279af1';
    });

});


function getPixelFromUser(){
    n = parseInt(document.querySelector('#number').value);
    if(n > 100 || n < 0)
        n = n%100;
    if(n == 69)
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    console.log(n);
    gridContainer.innerHTML = "";
    generateGrids();

}

function getRandomQuote(){
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result);
        randomQuote.innerText = result.content;
    });

}