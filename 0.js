var map = L.map('map').setView([23.6345, -102.5528], 5); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '© OpenStreetMap'
}).addTo(map);

if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(
function (pos) {
var lat = pos.coords.latitude;
var lon = pos.coords.longitude;

map.setView([lat, lon], 14);

L.marker([lat, lon]).addTo(map)
.bindPopup("Tu ubicación actual")
.openPopup();
},
function () {
alert("No se pudo obtener tu ubicación. Mapa centrado en México.");
}
);
} else {
alert("Tu navegador no soporta geolocalización.");
}

var recicladoras = [
    {
        nombre: "Ecoplast – Cuautitlán Izcalli",
        coords: [19.65585, -99.21990] 
    },
    {
        nombre: "Indplast S.A. de C.V.",
        coords: [19.66640, -99.21040]
    },
    {
        nombre: "Desperdicios Industriales El Balero",
        coords: [19.64695, -99.21485]
    },
    {
        nombre: "Banco de Materiales Reciclables – Tultitlán",
        coords: [19.64260, -99.16210]
    },
    {
        nombre: "Centro de Acopio PET – PetStar Ecatepec",
        coords: [19.54220, -99.06640]
    }
];

recicladoras.forEach(function (lugar) {
    L.marker(lugar.coords).addTo(map)
        .bindPopup(lugar.nombre);
});


recicladoras.forEach(function (lugar) {
L.marker(lugar.coords).addTo(map)
.bindPopup(lugar.nombre);
});