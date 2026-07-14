// Inicializa mapa usando Leaflet + OpenStreetMap
document.addEventListener('DOMContentLoaded', function () {
  const locations = {
    'Bogotá': [4.599380575422542, -74.09611760567681],
    'Medellín': [6.237979365352332, -75.57269589031674],
    'Barranquilla': [10.9685, -74.7813],
    'Neiva': [2.941108932309823, -75.30217677685152],
    'Meta': [4.139324012852299, -73.63200396335262],
    'Yopal': [5.33204239565956, -72.40632920567054]
  };

  // Centrar en Colombia
  const map = L.map('map', { scrollWheelZoom: true }).setView([4.5, -74.0], 6);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Icono personalizado: usar `ubic.png` como indicador de ubicación
  const ubicIcon = L.icon({
    iconUrl: 'assets/images/ubic.png',
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36]
  });

  const markers = {};
  Object.entries(locations).forEach(([name, coords]) => {
    const marker = L.marker(coords, { icon: ubicIcon }).addTo(map).bindPopup(`<strong>${name}</strong>`);
    markers[name] = marker;
  });
});
