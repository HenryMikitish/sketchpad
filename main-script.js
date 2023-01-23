const pad = document.querySelector('.padborder');
const input = document.querySelector('#textbox');

create.addEventListener('click', function() {
    let gridSize = Number(input.value);
   
    pad.replaceChildren();

    if (gridSize <= 100 && gridSize >= 2) {
        for (i = 0; i < gridSize; i++) {
            let gridRow = document.createElement('div');
            gridRow.classList.add('gridrow');
            pad.appendChild(gridRow);

            for (j = 0; j < gridSize; j++) {
                let gridColumn = document.createElement('div');
                gridColumn.classList.add('gridsquare');
                gridRow.appendChild(gridColumn);
            }
        }
    }

    else {
        let warning = document.createElement('div');
        warning.textContent = 'Please input a number between 2 and 100.'
        pad.appendChild(warning);
    }

    let gridSquares = document.querySelectorAll('.gridsquare')

    for (k = 0; k <= gridSquares.length; k++) {
        gridSquares[k].addEventListener('mouseover', function(e) {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            e.target.style.backgroundColor = "#" + randomColor});
    }

});