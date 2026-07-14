// Inicializa mapa usando Leaflet + OpenStreetMap
document.addEventListener('DOMContentLoaded', function () {
  const locations = {
    'Bogotá': [4.599306, -74.096096],
    'Medellín': [6.2442, -75.5812],
    'Barranquilla': [10.9685, -74.7813],
    'Neiva': [2.9389, -75.2803],
    'Meta': [4.1420, -73.6269],
    'Yopal': [5.3370, -72.3970]
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
