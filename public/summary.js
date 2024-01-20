// Sample data (replace this with your dynamic data)
const expenseData = {
    labels: ['Food and Drinks', 'Shopping', 'Transportation'],
    datasets: [{
        data: [50, 30, 20], // Sample data percentages for each category
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Sample colors
    }],
};

// Set up the pie chart
const ctx = document.getElementById('expenseChart').getContext('2d');
const expenseChart = new Chart(ctx, {
    type: 'pie',
    data: expenseData,
});

// Function to update the pie chart based on new data
function updatePieChart() {
    const newExpenseData = [
        totalFoodAndDrinksExpense,
        totalShoppingExpense,
        totalTransportationExpense,
        // Add similar variables for other expense categories if needed
    ];

    expenseChart.data.datasets[0].data = newExpenseData;
    expenseChart.update();
}

// Example of updating the chart with new data
// Replace this with the logic to fetch and update your real expense data
updatePieChart();
