<template>
    <ClientOnly>
      <div id="map" class="map-container"></div>
    </ClientOnly>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import L from 'leaflet';
  
  // Инициализация карты
  let map;
  
  onMounted(() => {
    // Создаем карту и центрируем её на определенных координатах
    map = L.map('map').setView([51.505, -0.09], 13);
  
    // Добавляем слой OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',  {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);
  
    // Обработчик кликов для добавления меток
    map.on('click', (e) => {
      const { lat, lng } = e.latlng;
      addMarker(lat, lng);
    });
  });
  
  // Функция для добавления метки
  function addMarker(lat, lng) {
    const marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(`Метка: ${lat.toFixed(5)}, ${lng.toFixed(5)}`).openPopup();
  }
  </script>
  
  <style scoped>
  .map-container {
    height: 500px; /* Высота карты */
    width: 100%; /* Ширина карты */
  }
  </style>