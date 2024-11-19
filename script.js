const ctx = document.getElementById('socialMediaChart').getContext('2d');

// Dados fictícios para o gráfico de pizza
const data = {
  labels: ['Facebook', 'YouTube', 'WhatsApp', 'Instagram', 'TikTok'],
  datasets: [{
    label: 'Usuários (em bilhões)',
    data: [2960, 2740, 2240, 2000, 1050], // Dados em milhões
    backgroundColor: [
      '#1976d2', 
      '#64b5f6', 
      '#bbdefb', 
      '#1e88e5', 
      '#90caf9'
    ],
    borderColor: '#0d47a1',
    borderWidth: 1
  }]
};

// Configurações do gráfico
const config = {
  type: 'pie',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const value = context.raw;
            const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(2);
            return `${context.label}: ${percentage}% (${(value / 1000).toFixed(2)} bilhões)`;
          }
        }
      }
    }
  }
};

// Renderiza o gráfico
new Chart(ctx, config);
