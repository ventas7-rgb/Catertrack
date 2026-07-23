// Inicializa mapa usando Leaflet + OpenStreetMap
document.addEventListener('DOMContentLoaded', function () {
  const locations = {
    'Bogotá': {
      coords: [4.599380575422542, -74.09611760567681],
      //image: 'assets/images/Corte.png',
      address: 'Cra. 25 #2a-87, Los Mártires, Bogotá, Cundinamarca',
      hours: 'Lunes a viernes 8:00 a 5:30 Sábados 8:30 a 12:30',
      contact: '+57 313 2416739'
    },
    'Medellín': {
      coords: [6.237979365352332, -75.57269589031674],
      //image: 'assets/images/Moto.png',
      address: 'Cra. 50 #36-19, La Candelaria, Medellín, La Candelaria, Medellín, Antioquia',
      hours: 'Lunes a viernes 8:00 a 5:30 Sábados 8:30 a 12:30',
      contact: '+57 313 2416739'
    },
    'Barranquilla': {
      coords: [10.9685, -74.7813],
      //image: 'assets/images/Strip.png',
      address: 'Por definir, Barranquilla, Atlántico',
      hours: 'Lunes a viernes 8:00 a 17:00 Sábados 8:30 a 12:30',
      contact: '+57 313 2416739'
    },
    'Neiva': {
      coords: [2.941108932309823, -75.30217677685152],
      //image: 'assets/images/Rodaje.png',
      address: 'Cl. 1G #5a-23, Neiva, Huila',
      hours: 'Lunes a viernes 8:00 a 17:00 Sábados 8:30 a 12:30',
      contact: '+57 313 2416739'
    },
    'Meta': {
      coords: [4.139324012852299, -73.63200396335262],
      //image: 'assets/images/Lubricacion.png',
      address: 'Cl. 24 A #34 -20, Villavicencio, Meta',
      hours: 'Lunes a viernes 7:00 a 17:00 Sábados 8:30 a 12:30',
      contact: '+57 313 2416739'
    },
    'Yopal': {
      coords: [5.33204239565956, -72.40632920567054],
      //image: 'assets/images/Perfil.png',
      address: 'Cl. 24 #7a-38, Yopal, Casanare',
      hours: 'Lunes a viernes 7:00 a 16:00 Sábados 8:30 a 12:30',
      contact: '+57 313 2416739'
    }
  };

  const branchDetails = document.getElementById('branchDetails');
  const branchImage = branchDetails?.querySelector('.branch-card__media img');
  const title = branchDetails?.querySelector('h3');
  const intro = branchDetails?.querySelector('.branch-card__intro');
  const address = branchDetails?.querySelector('.branch-card__detail-value[data-branch-field="address"]');
  const hours = branchDetails?.querySelector('.branch-card__detail-value[data-branch-field="hours"]');
  const contact = branchDetails?.querySelector('.branch-card__detail-value[data-branch-field="contact"]');
  const label = branchDetails?.querySelector('.branch-card__label');

  const setBranchField = (element, value) => {
    if (element) {
      element.textContent = value;
    }
  };

  if (branchImage) {
    branchImage.alt = 'Sucursal seleccionada de CaterTrack';
    branchImage.hidden = true;
    branchImage.style.display = 'none';
  }

  const colombiaBounds = [
    [ -4.3000, -81.8000 ],
    [ 13.5000, -66.8000 ]
  ];

  const map = L.map('map', {
    scrollWheelZoom: true,
    zoomControl: true,
    wheelDebounceTime: 100,
    minZoom: 6,
    maxZoom: 11,
    maxBounds: colombiaBounds,
    maxBoundsViscosity: 0.9
  }).setView([4.5, -74.0], 6);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
  }).addTo(map);

  const ubicIcon = L.icon({
    iconUrl: 'assets/images/ubic.png',
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36]
  });

  const updateBranchCard = (name) => {
    const item = locations[name];
    if (!branchDetails || !item) return;

    if (title) title.textContent = name;
    if (label) label.textContent = 'Sucursal destacada';
    if (intro) intro.textContent = `Explora la ubicación de ${name} y revisa la información disponible para la sucursal.`;
    setBranchField(address, item.address);
    setBranchField(hours, item.hours);
    setBranchField(contact, item.contact);

    if (branchImage && item.image) {
      branchImage.setAttribute('src', item.image);
      branchImage.setAttribute('alt', `Foto de la sucursal de CaterTrack en ${name}`);
      branchImage.hidden = false;
      branchImage.style.display = 'block';
    }
  };

  const markers = {};
  Object.entries(locations).forEach(([name, value]) => {
    const marker = L.marker(value.coords, { icon: ubicIcon }).addTo(map).bindPopup(`<strong>${name}</strong>`);
    marker.on('click', () => {
      map.flyTo(value.coords, 8, { duration: 1.2, easeLinearity: 0.25 });
      updateBranchCard(name);
    });
    markers[name] = marker;
  });

  const cityButtons = document.querySelectorAll('[data-city]');
  cityButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const city = button.dataset.city;
      const selected = locations[city];
      if (!selected) return;
      map.flyTo(selected.coords, 8, { duration: 1.2, easeLinearity: 0.25 });
      updateBranchCard(city);
    });
  });
});
