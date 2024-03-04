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

    const personalityTraitImage = document.getElementById('personalityTraitImage');
    personalityTraitImage.src = `${personalityTrait}.png`; // Set the correct image source
    personalityTraitImage.alt = personalityTrait + " Personality Trait";

    const ctx = document.getElementById('colorPercentageChart').getContext('2d');
    const colorPercentageChart = new Chart(ctx, {
        type: 'pie', // Type of chart to create
        data: {
            labels: ['Empathetic', 'Spontaneousness', 'Analytical', 'Organized'], // Labels for each color
            datasets: [{
                label: '%',
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

document.addEventListener('DOMContentLoaded', () => {
    // Select both draggable title bars and menu bars
    const draggableElements = document.querySelectorAll('.draggable, .menu-bar');

    draggableElements.forEach(element => {
        element.addEventListener('mousedown', function(e) {
            // The draggable element's parent window
            const windowToDrag = this.closest('.window');

            // Calculate the initial offset from the mouse to the top-left corner of the window
            let offsetX = e.clientX - windowToDrag.getBoundingClientRect().left;
            let offsetY = e.clientY - windowToDrag.getBoundingClientRect().top;

            // Function to handle mouse movement
            function mouseMoveHandler(e) {
                windowToDrag.style.position = 'absolute';
                windowToDrag.style.left = e.clientX - offsetX + 'px';
                windowToDrag.style.top = e.clientY - offsetY + 'px';
                windowToDrag.style.margin = 0; // Prevent any margin from affecting the position
            }

            // Function to stop moving the window
            function mouseUpHandler() {
                window.removeEventListener('mousemove', mouseMoveHandler);
                window.removeEventListener('mouseup', mouseUpHandler);
            }

            // Listen for mouse movement and mouse button release
            window.addEventListener('mousemove', mouseMoveHandler);
            window.addEventListener('mouseup', mouseUpHandler);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.windows-container');
    const windows = document.querySelectorAll('.window, .secondary-window, .third-window');

    // Function to get random number within range
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    windows.forEach(win => {
        // Ensure the container and window dimensions are known
        const containerRect = container.getBoundingClientRect();
        const winRect = win.getBoundingClientRect();

        // Calculate max possible top and left values
        const maxTop = containerRect.height - winRect.height;
        const maxLeft = containerRect.width - winRect.width;

        // Set random top and left values within bounds
        win.style.top = `${getRandomNumber(0, maxTop)}px`;
        win.style.left = `${getRandomNumber(0, maxLeft)}px`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Query all window elements
    const windows = document.querySelectorAll('.window, .secondary-window, .third-window');
    let zIndexCounter = 2; // Start higher than the base z-index

    windows.forEach(windowEl => {
        windowEl.addEventListener('mousedown', () => {
            // Increase z-index to bring to front
            windowEl.style.zIndex = zIndexCounter++;
        });
    });
});
