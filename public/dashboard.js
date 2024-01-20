// Define variables to store the total expenses for each category
let totalFoodAndDrinksExpense = 0;
let totalShoppingExpense = 0;
let totalTransportationExpense = 0;
// Add similar variables for other expense categories if needed

// Function to update progress bar based on total expense
function updateProgressBar(category, totalExpense, sliderId, progressBarId) {
    const slider = document.getElementById(sliderId);
    const progressBar = document.getElementById(progressBarId);

    // Calculate the percentage based on the total expense
    const totalCategoryExpense = totalFoodAndDrinksExpense + totalShoppingExpense + totalTransportationExpense;
    const percentage = (totalExpense / totalCategoryExpense) * 100;

    // Update the slider and progress bar
    slider.value = percentage;
    progressBar.style.width = `${percentage}%`;
}

// Your existing JavaScript code

// Function to update progress bar based on total expense
function updateProgressBar(category, totalExpense, sliderId, progressBarId) {
    const slider = document.getElementById(sliderId);
    const progressBar = document.getElementById(progressBarId);

    // Calculate the percentage based on the total expense
    const totalCategoryExpense = totalFoodAndDrinksExpense + totalShoppingExpense + totalTransportationExpense;
    const percentage = (totalExpense / totalCategoryExpense) * 100;

    // Update the slider and progress bar
    slider.value = percentage;
    progressBar.style.width = `${percentage}%`;
}

// Function to update all sliders
function updateAllSliders() {
    updateProgressBar('Food and Drinks', totalFoodAndDrinksExpense, 'foodAndDrinksSlider', 'foodAndDrinksProgressBar');
    updateProgressBar('Shopping', totalShoppingExpense, 'shoppingSlider', 'shoppingProgressBar');
    updateProgressBar('Transportation', totalTransportationExpense, 'transportationSlider', 'transportationProgressBar');
    // Add similar calls for other expense categories if needed

    updatePieChart();
}

// Function to add an expense
function addExpense() {
    // Retrieve values from the form
    const category = document.getElementById('expenseCategory').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);

    // Validate if the amount is a valid number
    if (isNaN(amount)) {
        alert('Please enter a valid numeric amount.');
        return;
    }

    // Add the expense to the corresponding category
    if (category === 'Food and Drinks') {
        totalFoodAndDrinksExpense += amount;
    } else if (category === 'Shopping') {
        totalShoppingExpense += amount;
    } else if (category === 'Transportation') {
        totalTransportationExpense += amount;
    }
    // Add similar conditions for other expense categories if needed

    // Update all sliders after adding the expense
    updateAllSliders();

    // Clear the form fields after adding expense
    document.getElementById('expenseCategory').value = '';
    document.getElementById('expenseAmount').value = '';
    document.getElementById('expenseNote').value = '';
}

// Call the function to initialize sliders
updateAllSliders();

// Disable manual changes to sliders
document.getElementById('foodAndDrinksSlider').disabled = true;
document.getElementById('shoppingSlider').disabled = true;
document.getElementById('transportationSlider').disabled = true;
// Add similar lines for other sliders if needed

