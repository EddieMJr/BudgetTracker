// displays the user's income above the expense table
function displayIncome() {
    const input = document.getElementById('income__input');
    const message = input.value;
    const divMessage = message / 12; // divided for monthly income
    const denseDiv = divMessage.toFixed(2); // 2 decimal points for output

    //validation for salary input 
    if (message === '' || isNaN(message) || message <= 0 || message.includes('e')) {
        alert('Please enter a valid salary.');
        return;
    }

    const output = document.getElementById('income__p');
    const monthlyOut = document.getElementById('monthlyinc__p');
    output.textContent = `Your Salary is ${Number(message).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`;
    monthlyOut.textContent = `This means your monthly Income is ${Number(denseDiv).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`;

    myReceipt.setSalary(Number(message)); 
}

// budget class w/ properties and methods to handle income, expenses, and total budget
class Budget {
    constructor(itemName, cost, category, info){
        this.itemName = document.getElementById('item').value;
        this.cost = document.getElementById('cost').value;
        this.category = document.getElementById('category').value;
        this.info = document.getElementById('info').value;
    }

    addRow() {
        //creates a new row for the table of expenses
        const newRow = document.createElement('tr');

        //creates cells for row and adds info into the cells
        const itemCell = document.createElement('td');
        itemCell.textContent = this.itemName;
        const costCell = document.createElement('td');
        costCell.textContent = `$${this.cost}`;
        const catCell = document.createElement('td');
        catCell.textContent = this.category;
        const infoCell = document.createElement('td');
        infoCell.textContent = this.info;

        // add each cell to the new table row
        newRow.appendChild(itemCell);
        newRow.appendChild(costCell);
        newRow.appendChild(catCell);
        newRow.appendChild(infoCell);

        // find the expense table and add the new row to it
        const table = document.getElementById('expense__table');
        table.appendChild(newRow);
    }
}

// creates receipt for the summary of the budget (encapsulation)
class Receipt {
    constructor() {
        this.expenses = [];
        this.salary = 0; 
    }

    // setting salary
    setSalary(salary) { 
        this.salary = salary;
    }

    // adding expenses to the receipt
    addExpense(itemName, cost, category, info) {
        this.expenses.push({ itemName, cost: Number(cost), category, info });
    }

    // adding up the total price of all the expenses
    getTotalExpenses() {
        return this.expenses.reduce((sum, expense) => sum + expense.cost, 0);
    }

    // getting the monthly income
    getMonthlyIncome() {
        return this.salary / 12; // Calculate monthly income based on salary
    }

    // insert the values into the receipt
    displayReceipt() {
        document.getElementById('salary__p').textContent = `Salary: ${this.salary.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`;
        document.getElementById('monthly__p').textContent = `Monthly Income: ${this.getMonthlyIncome().toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`;
        document.getElementById('rows__p').textContent = `Total Expenses: ${this.expenses.length} items`;
        document.getElementById('rowTotal__p').textContent = `Expense Total: ${this.getTotalExpenses().toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`; 
        document.getElementById('savings__p').textContent = `Expense Total: ${this.getSavings().toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`; 
    }
}

// instantiate the receipt
const myReceipt = new Receipt();

// for added rows when the add row button is clicked
document.getElementById('addBtn').addEventListener('click', function() {
    const itemName = document.getElementById('item').value;
    const cost = document.getElementById('cost').value;
    const category = document.getElementById('category').value;
    const info = document.getElementById('info').value;

    // validation checks for the expense input fields
    if (itemName === '') {
        alert('Please enter an item name.');
        return;
    }
    if (cost === '' || isNaN(cost) || cost <= 0 || cost.includes('e')) {
        alert('Please enter a valid cost.');
        return;
    }
    if (category === 'select') {
        alert('Please select a category.');
        return;
    }

    // add expense to the receipt
    myReceipt.addExpense(itemName, cost, category, info);

    // create a new Budget object with the input values and add a row to the table
    const budget = new Budget(itemName, cost, category, info);
    budget.addRow();
});

// show receipt when summarize button is clicked
document.getElementById('summarize__button').addEventListener('click', function() {
    myReceipt.displayReceipt();
});