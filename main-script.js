const pad = document.querySelector('.padborder');
const input = document.querySelector('#textbox');

create.addEventListener('click', function() {
    //let grid = document.createElement('div');
    //grid.textContent = `${Number(input.value)}`;
    let gridSize = Number(input.value);
    //pad.appendChild(xy);

    for (i = 0; i < gridSize; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        pad.appendChild(grid);

        for (j = 0; j < gridSize; j++) {
            let smallgrid = document.createElement('div');
            smallgrid.classList.add('smallgrid');
            grid.appendChild(smallgrid);
        }
    }

});