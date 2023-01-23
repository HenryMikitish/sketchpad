const pad = document.querySelector('.padborder');
const input = document.querySelector('#textbox');
let clean = true;

create.addEventListener('click', function() {
    let gridSize = Number(input.value);

    if ( clean == true) {clean = false}
    else if (clean == false) {
        //let gridRow = document.querySelector('.gridrow');
        //let gridColumn = document.querySelector('.gridsquare');
        //gridColumn.replaceChildren();
        pad.replaceChildren();
    }

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