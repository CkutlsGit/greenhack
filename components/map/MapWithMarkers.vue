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

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Исправление путей к иконкам маркеров для продакшна
// @ts-ignore
// eslint-disable-next-line
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const mapContainer = ref(null)
const map = ref(null)
const marker = ref(null)
const selectedLocation = ref(null)
const locationInfo = ref('')

async function getLocationInfo(lat, lng) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1&accept-language=ru`
    )
    const data = await response.json()
    if (data.address) {
      const city = data.address.city || 
                  data.address.town || 
                  data.address.village || 
                  data.address.hamlet || 
                  data.address.suburb || 
                  data.address.municipality || 
                  data.address.state_district || ''
      const region = data.address.state || 
                    data.address.region || 
                    data.address.county || ''
      const country = data.address.country || ''
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
    locationInfo.value = 'Ошибка определения местоположения'
  }
}

onMounted(() => {
  if (typeof window !== 'undefined' && mapContainer.value) {
    const southWest = L.latLng(-85, -180)
    const northEast = L.latLng(85, 180)
    const bounds = L.latLngBounds(southWest, northEast)
    map.value = L.map(mapContainer.value, {
      maxBounds: bounds,
      maxBoundsViscosity: 1.0,
      worldCopyJump: true,
      minZoom: 3,
      maxZoom: 20
    }).setView([0, 0], 2)
    // Минималистичный слой CartoDB Positron
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(map.value)
    map.value.on('click', (e) => {
      const { lat, lng } = e.latlng
      if (lat < -85 || lat > 85 || lng < -180 || lng > 180) {
        return
      }
      if (marker.value) {
        marker.value.remove()
      }
      marker.value = L.marker([lat, lng]).addTo(map.value)
      selectedLocation.value = { lat, lng }
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
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 0;
}

#map {
  width: 100vw;
  height: 100vh;
  border: none;
  background: none;
}

.coordinates {
  position: absolute;
  bottom: 24px;
  left: 24px;
  background: rgba(255,255,255,0.7);
  padding: 10px 18px;
  border-radius: 8px;
  box-shadow: none;
  z-index: 10;
  min-width: 200px;
  font-size: 1em;
  color: #222;
  font-family: 'Inter', Arial, sans-serif;
  letter-spacing: 0.01em;
}

.location-info {
  margin-top: 6px;
  font-size: 0.95em;
  color: #666;
}

.leaflet-control {
  background: rgba(255,255,255,0.7) !important;
  border: none !important;
  box-shadow: none !important;
}

.leaflet-control-zoom-in,
.leaflet-control-zoom-out {
  color: #222 !important;
  font-weight: bold;
}

.leaflet-pane, .leaflet-marker-icon, .leaflet-marker-shadow {
  outline: none !important;
  box-shadow: none !important;
}
</style> 