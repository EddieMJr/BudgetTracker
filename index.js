// displays the user's income above the expense table
function displayIncome() {
    const input = document.getElementById('income__input');
    const message = input.value;
    const divMessage = message / 12;
    const denseDiv = divMessage.toFixed(2);

    const output = document.getElementById('income__p');
    const monthlyOut = document.getElementById('monthlyinc__p');
    output.textContent = `Your Income is ${Number(message).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`;
    monthlyOut.textContent = `This means your monthly Income is ${Number(denseDiv).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`;
}

// add row on the table with the info from the expense section
function addRow() {
    const itemName = document.getElementById('item').value;
    const cost = document.getElementById('cost').value;
    const category = document.getElementById('category').value;
    const info = document.getElementById('info').value;

    const newRow = document.createElement('tr');

    const itemCell = document.createElement('td');
    itemCell.textContent = itemName;
    const costCell = document.createElement('td');
    costCell.textContent = `$${cost}`;
    const catCell = document.createElement('td');
    catCell.textContent = category;
    const infoCell = document.createElement('td');
    infoCell.textContent = info;

    newRow.appendChild(itemCell);
    newRow.appendChild(costCell);
    newRow.appendChild(catCell);
    newRow.appendChild(infoCell);

    const table = document.getElementById('expense__table');
    table.appendChild(newRow);
}

// math calculations for the budget
    // divides for monthly income