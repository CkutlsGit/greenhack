<script setup>
import L from "leaflet"
import "leaflet/dist/leaflet.css"

const emit = defineEmits(['openModal'])

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png", 
})

const mapContainer = ref(null)
const map = ref(null)
const marker = ref(null)
const selectedLocation = ref(null)
const locationInfo = ref("")

async function getLocationInfo(lat, lng) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1&accept-language=en`
    )
    const data = await response.json()

    if (data.address) {
      const city = data.address.city || ""
      const region =
        data.address.state || data.address.region || data.address.county || ""
      const country = data.address.country || ""

      let locationString = ""
      if (city) locationString += city

      if (region && region !== city) {
        if (locationString) locationString += ", "
        locationString += region
      }

      if (country) {
        if (locationString) locationString += ", "
        locationString += country
      }

      locationInfo.value = locationString || "Город и страна не определены"
    } else {
      locationInfo.value = "Город и страна не определены"
    }
  } catch (error) {
    console.error("Ошибка при получении информации о местоположении:", error)
    locationInfo.value = "Город и страна не определены"
  }
}

onMounted(() => {
  const southWest = L.latLng(-85, -180)
  const northEast = L.latLng(85, 180)

  const bounds = L.latLngBounds(southWest, northEast)
  map.value = L.map(mapContainer.value, {
    maxBounds: bounds,
    maxBoundsViscosity: 1.0,
    worldCopyJump: true,
    minZoom: 3,
    maxZoom: 20,
  }).setView([0, 0], 2)
  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
      attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
    }
  ).addTo(map.value)

  map.value.on("click", (e) => {
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
})

onUnmounted(() => {
  if (map.value) {
    map.value.remove()
  }
})
</script>

<template>
  <section class="map-container mt-6">
    <div id="map" ref="mapContainer"></div>
    <article v-if="selectedLocation" class="absolute bottom-12 left-1/2 -translate-x-1/2 z-[9999] bg-[#FDFFFD33] rounded-full p-6">
      <footer class="location-info flex items-center gap-4 cursor-pointer" style="color: #222; font-weight: bold">
        <img @click="selectedLocation = null" class="bg-[#050E011A] p-5 rounded-full" src="/public/icons/array-back-icon.svg">
        <template v-if="locationInfo">
          <div class="bg-[#FDFFFD] rounded-full p-5">
            <h2 class="text-#050E01 font-inter-tight opacity-50 font-semibold text-3xl">{{ locationInfo }}</h2>
          </div>
        </template>
        <template v-else>
          <h2>Город и страна не определены</h2>
        </template>
        <button @click="$emit('openModal', locationInfo)" :class="{ 'bg-red-800' : locationInfo == 'Город и страна не определены' }" class="font-inter-tight text-3xl font-semibold p-5 bg-[#2CAE28] rounded-full text-[#FDFFFD] cursor-pointer">Approve</button>
      </footer>
    </article>
  </section>
</template>
<!-- :disabled="locationInfo == 'Город и страна не определены'" -->
<style scoped>
.map-container {
  width: 100%;
  height: 80vh;
  overflow-x: hidden; 
}

#map {
  width: 100vw;
  height: 80vh;
  border: none;
  background: none;
}

.location-info {
  margin-top: 8px;
  font-size: 1em;
  color: #222;
}

.leaflet-control {
  background: rgba(255, 255, 255, 0.7) !important;
  border: none !important;
  box-shadow: none !important;
}

.leaflet-control-zoom-in,
.leaflet-control-zoom-out {
  color: #222 !important;
  font-weight: bold;
}

.leaflet-pane,
.leaflet-marker-icon,
.leaflet-marker-shadow {
  outline: none !important;
  box-shadow: none !important;
}
</style>
