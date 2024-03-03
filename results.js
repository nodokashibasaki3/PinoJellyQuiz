document.addEventListener('DOMContentLoaded', function() {
    // Assuming you already have the color percentages
    const bluePercentage = 25; // Example percentage
    const orangePercentage = 25;
    const greenPercentage = 25;
    const goldPercentage = 25;

    const ctx = document.getElementById('colorPercentageChart').getContext('2d');
    const colorPercentageChart = new Chart(ctx, {
        type: 'pie', // Type of chart to create
        data: {
            labels: ['Empathetic', 'Spontaneousness', 'Analytical', 'Organized'], // Labels for each color
            datasets: [{
                label: 'Your Personality Make-up',
                data: [bluePercentage, orangePercentage, greenPercentage, goldPercentage], // The percentage data
                backgroundColor: [
                    '#FF7FB0',
                    '#F8D956',
                    '#804500',
                    '#DD6191' 
                ],
                borderColor: [
                    '#000', // White borders
                    '#000',
                    '#000',
                    '#000'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true
        }        
    });
});