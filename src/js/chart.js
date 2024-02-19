"use strict";

/* chart.js för att skapa diagram */
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

/* Hämta datan till diagramet */

async function loadAntagning() {
    try {
        const response = await fetch(`https://studenter.miun.se/~mallar/dt211g/`);
        const data = await response.json();
    }
}