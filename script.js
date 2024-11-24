const ctx = document.getElementById('streamingChart').getContext('2d');
const streamingChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Netflix', 'Prime Video', 'Disney+', 'Max'],
        datasets: [{
            data: [230, 200, 150, 80],
            backgroundColor: ['#f44336', '#4caf50', '#2196f3', '#9c27b0'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true
            }
        }
    }
});
