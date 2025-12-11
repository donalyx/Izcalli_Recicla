var map = L.map('map').setView([23.6345, -102.5528], 5); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '� OpenStreetMap'
}).addTo(map);

if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(
function (pos) {
var lat = pos.coords.latitude;
var lon = pos.coords.longitude;

map.setView([lat, lon], 14);

L.marker([lat, lon]).addTo(map)
.bindPopup("Tu ubicaci�n actual")
.openPopup();
},
function () {
alert("No se pudo obtener tu ubicaci�n. Mapa centrado en M�xico.");
}
);
} else {
alert("Tu navegador no soporta geolocalizaci�n.");
}

var recicladoras = [
    {
        nombre: "Ecoplast  Cuautitl�n Izcalli",
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
        nombre: "Banco de Materiales Reciclables  Tultitl�n",
        coords: [19.64260, -99.16210]
    },
    {
        nombre: "Centro de Acopio PET  PetStar Ecatepec",
        coords: [19.54220, -99.06640]
    },
    {
    nombre: "RESICLAJE Compra y Venta de PET",
    coords: [19.5628, -99.1895] 
    },
    {
    nombre: "Waste & Recycling",
    coords: [19.6552, -99.2148] 
},
{
    nombre: "Reemplazo Centro de Reciclaje",
    coords: [19.6560, -99.2159] 
},
{
    nombre: "Depósito de Reciclaje “Izcalli”",
    coords: [19.6586, -99.2392] 
},
{
    nombre: "Alcamare – Banco de Materiales Reciclables (Tultitlán)",
    coords: [19.6460, -99.1676] 
},
];

recicladoras.forEach(function (lugar) {
    L.marker(lugar.coords).addTo(map)
        .bindPopup(lugar.nombre);
});


recicladoras.forEach(function (lugar) {
L.marker(lugar.coords).addTo(map)
.bindPopup(lugar.nombre);
});