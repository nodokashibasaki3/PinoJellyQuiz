document.addEventListener('DOMContentLoaded', function() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const personalityTrait = urlParams.get('closestTrait');
    const bluePercentage = urlParams.get('blue');
    const orangePercentage = urlParams.get('orange');
    const greenPercentage = urlParams.get('green');
    const goldPercentage = urlParams.get('gold');

    // Update the DOM elements with the results
    document.getElementById('personalityTrait').textContent = personalityTrait;
    document.getElementById('bluePercentage').textContent = bluePercentage;
    document.getElementById('orangePercentage').textContent = orangePercentage;
    document.getElementById('greenPercentage').textContent = greenPercentage;
    document.getElementById('goldPercentage').textContent = goldPercentage;

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
