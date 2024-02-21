"use strict";

/* variabler */
const searchBtnEl = document.getElementById('searchBtn');
const searchInputEl = document.getElementById('searchInput');

/* eventlistener */
searchBtnEl.addEventListener('click', searchLocation, false);

/* Leaflet */
let map = L.map('map').setView([62.39264256963892, 17.284794169579705], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/* markör */
let marker = L.marker([62.39264256963892, 17.284794169579705]).addTo(map);

/* map control, hitta din plats */
L.control.locate().addTo(map);

/*  inbyggd map search EJ AJAX 
L.Control.geocoder().addTo(map); */

/* sökfunktion */

async function searchLocation() {
    const adress = document.getElementById('searchInput').value;
    const url = (`https://nominatim.openstreetmap.org/search?format=json&q=${adress}`);

    try {
        /* Fetch-anrop */
        const response = await fetch(url);
        const data = await response.json();

        //Hittar på kartan 
            const lat = data[0].lat;
            const lon = data[0].lon;
            map.setView([lat, lon], 12);

            /* lägger till en markör */
            marker.setLatLng([lat,lon]);

    } catch (error) {
        console.error("Ett fel uppstod" + error);
    }
}

