
//need to create a given number of divs
const container = document.querySelector('.container');


const click = document.querySelector('button');




// TODO: Take in user input tochange the size of the gird 




function promptUser(){
    var gridSize = prompt("what size would you like your grid to be x by x", 16);

    var width = (1/gridSize * 100) 
    
    // remove all divs before appending new ones
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }


    if(gridSize <= 100){
        for(let i = 0; i<gridSize; i++){
    
            for(let j = 0; j<gridSize; j++){
            // When Appending muliple elements need to create them in the for loop 
            const etch = document.createElement('div'); 
            etch.style.flexBasis = width + "%";
            container.appendChild(etch);

            }
    
        }

    }

    else{
        alert("grid size can't be greater than 100 x 100");
    }
    


}

