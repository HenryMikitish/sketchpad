const pad = document.querySelector('.padborder');
const input = document.querySelector('#textbox');

create.addEventListener('click', function() {
    let gridSize = Number(input.value);
   
    pad.replaceChildren();

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

});