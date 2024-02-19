"use strict";

window.onload = loadAntagning();

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
        /* hämta datan async */
        const response = await fetch(`https://studenter.miun.se/~mallar/dt211g/`);
        const data = await response.json();
        /*  sortera ut endast kurserna */
        const courseData = data.filter(element => element.type == 'Kurs');
        /* sortera ut endast programmen */
        const programData = data.filter(element => element.type == 'Program');

    } catch (error) {
        console.log(error);
    }
}