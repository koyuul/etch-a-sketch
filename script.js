//create grid

function newGrid(gridSize){
   
    let divGridCreator=document.createElement("div");
    divGridCreator.id="divGrid";
    document.querySelector('body').appendChild(divGridCreator);
    let divGrid = document.querySelector('#divGrid');
    
    //create grid divs
    divGrid.style=`grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr);`
    for (i=0; i<(gridSize*gridSize); i++){ //create divs into grid
        console.log('sdf')
        let gridDivCreator = document.createElement("div");
        gridDivCreator.className="divInGrid";
        divGrid.appendChild(gridDivCreator);    
    };

    //assign mouseover for each square
    let gridDivs = document.querySelectorAll('.divInGrid');
    gridDivs.forEach(divInGrid => {
        divInGrid.addEventListener("mouseover", fillSquare);
    });
};

//grid resset
let resetGridButton = document.querySelector("#resetGrid");
resetGridButton.addEventListener("click", function(){
    divGrid.remove();
    let gridSize = prompt('pls enter size');
    newGrid(gridSize);
});


function fillSquare(e){
    this.style.backgroundColor='orange'
};

//start
newGrid(16);//default start val           