function createDivs(numberOfDivs) {
    const container = document.querySelector('#container');

 
 
    for (k = 1; k <= numberOfDivs; k++) {

        const row = document.createElement('div');
        row.className = 'row';
 
 
        for (let i = 1; i <= numberOfDivs; i++) {
            const newDiv = document.createElement('div');
            newDiv.className = 'newDiv'
            newDiv.id = `R${k}C${i}`
            newDiv.textContent = `R${k}C${i}`;
            row.appendChild(newDiv);
        }

        container.appendChild(row);
    }

}

createDivs(16);

const divs = document.querySelectorAll('.newDiv');

// we use the .forEach method to iterate through each button
divs.forEach((thingo) => {

  // and for each one we add a 'click' listener
  thingo.addEventListener('click', () => {
    alert(thingo.id);
  });
});