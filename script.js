function calculateResults() {
    let scores = { blue: 0, orange: 0, green: 0, gold: 0 };
    let questionCounts = { blue: 0, orange: 0, green: 0, gold: 0 };

    // Collect all slider inputs
    document.querySelectorAll('.slider').forEach(slider => {
        const color = slider.name.match(/[a-zA-Z]+/)[0]; // Extract color from name
        scores[color] += parseInt(slider.value);
        questionCounts[color] += 1;
    });

    // Convert total scores to averages
    let totalAverageScore = 0;
    for (let color in scores) {
        if (questionCounts[color] > 0) {
            scores[color] = scores[color] / questionCounts[color]; // Compute average score
            totalAverageScore += scores[color]; // Sum up all average scores for normalization
        }
    }

    // Normalize scores to percentages
    let percentages = {};
    for (let color in scores) {
        percentages[color] = (scores[color] / totalAverageScore) * 100;
    }

    // Personality Traits and their color compositions
    const traits = {
        Candor: { blue: 40, orange: 20, green: 30, gold: 10 },
        Cheery: { blue: 30, orange: 40, green: 10, gold: 20 },
        Sweet: { blue: 50, orange: 20, green: 10, gold: 20 },
        Straightforward: { blue: 20, orange: 30, green: 40, gold: 10 },
        ShowOff: { blue: 10, orange: 50, green: 10, gold: 30 },
        Simple: { blue: 10, orange: 40, green: 20, gold: 30 },
        Impetuous: { blue: 20, orange: 50, green: 10, gold: 20 },
        Fiery: { blue: 40, orange: 40, green: 10, gold: 10 },
        Calm: { blue: 30, orange: 10, green: 20, gold: 40 }
    };

    // Calculate the closest personality trait
    let closestTrait = '';
    let smallestDistance = Infinity;

    for (let trait in traits) {
        let distance = 0;
        for (let color in traits[trait]) {
            distance += Math.pow((traits[trait][color] - percentages[color]), 2);
        }
        if (distance < smallestDistance) {
            smallestDistance = distance;
            closestTrait = trait;
        }
    }

    const queryString = `closestTrait=${encodeURIComponent(closestTrait)}&blue=${percentages.blue.toFixed(2)}&orange=${percentages.orange.toFixed(2)}&green=${percentages.green.toFixed(2)}&gold=${percentages.gold.toFixed(2)}`;
    window.location.href = `results.html?${queryString}`;
}