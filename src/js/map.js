let map = L.map('map').setView([62.39264256963892, 17.284794169579705], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([62.39264256963892, 17.284794169579705]).addTo(map);