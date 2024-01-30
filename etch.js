const container = document.querySelector('#container');

function createDivs(numberOfDivs) {
     
    for (k = 1; k <= numberOfDivs; k++) {

        const row = document.createElement('div');
        row.className = 'row';
 
 
        for (let i = 1; i <= numberOfDivs; i++) {
            const newDiv = document.createElement('div');
            newDiv.className = 'newDiv'
            // newDiv.id = `R${k}C${i}`
            // newDiv.textContent = `R${k}C${i}`;
            row.appendChild(newDiv);
        }

        container.appendChild(row);
    }


    const divs = document.querySelectorAll('.newDiv');

    // we use the .forEach method to iterate through each cell
    divs.forEach((cell) => {
    
      // and for each one we add a 'click' listener
      cell.addEventListener('mouseenter', () => {
        cell.style.backgroundColor = 'grey'
        // cell.style.opacity = ;
      });
    
      cell.addEventListener('mouseleave', () => {
        cell.style.backgroundColor = 'black';
        // cell.
      });
    });


}

createDivs(100);



const button = document.querySelector('#gridSize');
button.addEventListener('click', () => {
  let size = prompt("Please enter the desired grid size");
  if (size > 100) {
    alert("Maximum grid size is 100x100. Grid has been set to 100.");
    size = 100;
  }
  container.replaceChildren();
  createDivs(size);
});