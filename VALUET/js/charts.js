
const labels = [
    'Bitcoin',
    'Dash',
    'Ethereum',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Valuaet',
        backgroundColor: 'rgb(0, 132, 255)',
        borderColor: 'rgb(0, 88, 170)',
        data: [10,5,18],
    }]
};

const config = {
    type: 'doughnut',
    data: data,
    options: {}
};
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);