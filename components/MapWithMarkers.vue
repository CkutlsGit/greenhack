<template>
  <div class="map-container">
    <div id="map" ref="mapContainer"></div>
    <div v-if="selectedLocation" class="coordinates">
      <div>Координаты: {{ selectedLocation.lat.toFixed(6) }}, {{ selectedLocation.lng.toFixed(6) }}</div>
      <div v-if="locationInfo" class="location-info">
        {{ locationInfo }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Исправление путей к иконкам маркеров для продакшна
// @ts-ignore
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const mapContainer = ref<HTMLElement | null>(null)
const map = ref<L.Map | null>(null)
const marker = ref<L.Marker | null>(null)
const selectedLocation = ref<{ lat: number; lng: number } | null>(null)
const locationInfo = ref<string>('')

// Функция для получения информации о местоположении
async function getLocationInfo(lat: number, lng: number) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1&accept-language=ru`
    )
    const data = await response.json()
    
    if (data.address) {
      // Собираем информацию о населенном пункте
      const city = data.address.city || 
                  data.address.town || 
                  data.address.village || 
                  data.address.hamlet || 
                  data.address.suburb || 
                  data.address.municipality || 
                  data.address.state_district || 
                  ''

      // Собираем информацию о регионе/области
      const region = data.address.state || 
                    data.address.region || 
                    data.address.county || 
                    ''

      // Получаем страну
      const country = data.address.country || ''

      // Формируем строку с информацией
      let locationString = ''
      if (city) locationString += city
      if (region && region !== city) {
        if (locationString) locationString += ', '
        locationString += region
      }
      if (country) {
        if (locationString) locationString += ', '
        locationString += country
      }

      locationInfo.value = locationString || 'Местоположение не определено'
    } else {
      locationInfo.value = 'Местоположение не определено'
    }
  } catch (error) {
    console.error('Ошибка при получении информации о местоположении:', error)
    locationInfo.value = 'Ошибка определения местоположенияв'
  }
}

onMounted(() => {
  if (mapContainer.value) {
    // Ограничения карты
    const southWest = L.latLng(-85, -180);
    const northEast = L.latLng(85, 180);
    const bounds = L.latLngBounds(southWest, northEast);

    map.value = L.map(mapContainer.value, {
      maxBounds: bounds, // Ограничение перемещения
      maxBoundsViscosity: 1.0, // Жесткое ограничение
      worldCopyJump: true, // Копия мира при прокрутке
      minZoom: 3, // Минимальный зум
      maxZoom: 20 // Максимальный зум
    }).setView([0, 0], 2);

    // Добавление слоя OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map.value)

    // Обработчик клика по карте
    map.value.on('click', (e: L.LeafletMouseEvent) => {
      const { lat, lng } = e.latlng;
      // Проверяем, что координаты в допустимых пределах
      if (lat < -85 || lat > 85 || lng < -180 || lng > 180) {
        return; // Не ставим метку
      }
      // Удаляем предыдущую метку, если она есть
      if (marker.value) {
        marker.value.remove()
      }
      // Создаем новую метку
      marker.value = L.marker([lat, lng]).addTo(map.value!)
      selectedLocation.value = { lat, lng }
      // Получаем информацию о местоположении
      getLocationInfo(lat, lng)
    })
  }
})

onUnmounted(() => {
  if (map.value) {
    map.value.remove()
  }
})
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100vh;
  position: relative;
}

#map {
  width: 100%;
  height: 100%;
  border: none;
}

.coordinates {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  z-index: 1000;
  min-width: 250px;
  font-size: 1.1em;
}

.location-info {
  margin-top: 8px;
  font-size: 1em;
  color: #444;
}
</style> 