"use strict";

window.onload = loadAntagning();



/* Hämta datan till diagramet */

async function loadAntagning() {
    try {
        /* hämta datan async */
        const response = await fetch(`https://studenter.miun.se/~mallar/dt211g/`);
        const data = await response.json();
        /*  sortera ut endast kurserna */
        const courseData = data.filter(e => e.type == 'Kurs');
        /* sortera efter antal sökandet*/
        courseData.sort(function (a, b) {
            return b.applicantsTotal - a.applicantsTotal;
        });
        /* klipp ner till bara de 6 mest populära kurserna  */
        const finalCourseData = courseData.slice(0, 6);
        console.log(finalCourseData);
        /* plocka ut namnen på kurserna */
        const courseLabels = finalCourseData.map(obj => obj.name);
        /* plocka ut värdena */
        const courseValues = finalCourseData.map(obj => obj.applicantsTotal);

        /* chart.js för att skapa stapeldiagram */
        const ctx1 = document.getElementById('myChart1');

        new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: courseLabels,
                datasets: [{
                    label: 'Antal sökande',
                    data: courseValues,
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

        /* sortera ut endast programmen */
        const programData = data.filter(element => element.type == 'Program');
        /* sortera efter antal sökandet*/
        programData.sort(function (a, b) {
            return b.applicantsTotal - a.applicantsTotal;
        });
        /* klipp ner till bara de 5 mest populära programen  */
        const finalProgramData = programData.slice(0, 5);
        console.log(finalProgramData);
        /* plocka ut namnen på kurserna */
        const programLabels = finalProgramData.map(obj => obj.name);
        /* plocka ut värdena */
        const programValues = finalProgramData.map(obj => obj.applicantsTotal);

        /* chart.js för att skapa stapeldiagram */
        const ctx2 = document.getElementById('myChart2');

        new Chart(ctx2, {
            type: 'doughnut',
            data: {
                labels: programLabels,
                datasets: [{
                    label: 'Antal sökande',
                    data: programValues,
                    borderWidth: 1
                }]
            },
            options: {
            }
        });

    } catch (error) {
        console.log(error);
    }
}