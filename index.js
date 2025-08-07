// displays the user's income above the expense table
function displayIncome() {
    const input = document.getElementById('income__input');
    const message = input.value;
    const divMessage = input.value / 12;
    const denseDiv = divMessage.toFixed(1);

    const output = document.getElementById('income__p');
    const monthlyOut = document.getElementById('monthlyinc__p');
    output.textContent = `Your Income is $${message}`;
    monthlyOut.textContent = `This means your monthly Income is $${denseDiv}`;
}

// add row on the table with the info from the expense section
function addRow() {
    const newRow = document.createElement('tr');

    const table = document.getElementById('expense__table');
    table.appendChild(newRow);
}

// math calculations for the budget
    // divides for monthly income