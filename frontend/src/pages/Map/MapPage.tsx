import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";
import { FiSearch } from "react-icons/fi";
import "../../styles/MapPage.css";

const icon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
});

// ESTE FUNCIONA SIEMPRE - SIN TEMBLOR
function FlyTo({ coords }: { coords: [number, number] }) {
  const map = useMap();

  useEffect(() => {
    if (coords) {
      map.flyTo(coords, 15, { duration: 1.2 });
    }
  }, [coords]);

  return null;
}

export function MapPage() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [search, setSearch] = useState("");
  const [deviceName, setDeviceName] = useState("");
  const [flyTarget, setFlyTarget] = useState<[number, number] | null>(null);

  // Cargar ubicación guardada
  useEffect(() => {
    const saved = localStorage.getItem("deviceLocation");

    if (!saved) return;

    const data = JSON.parse(saved);

    if (data.lat && data.lng) {
      setPosition([data.lat, data.lng]);
    }

    if (data.name) setDeviceName(data.name);
  }, []);

  // Clic en el mapa → SI actualiza lat/lng
  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
        const coords: [number, number] = [e.latlng.lat, e.latlng.lng];

        // Actualizar posición correctamente
        setPosition(coords);

        // IMPORTANTE: actualizar manualmente el mapa para re-renderizar marcador
        map.setView(coords, map.getZoom());
      },
    });

    // Forzar que el marker SIEMPRE se actualice con un "key" dinámico
    return position ? (
      <Marker key={position[0] + position[1]} position={position} icon={icon} />
    ) : null;
  }

  // Guardar ubicación
  const saveLocation = () => {
    if (!position || !deviceName.trim()) {
      alert("Agregue un nombre y seleccione ubicación.");
      return;
    }

    const data = {
      name: deviceName,
      lat: position[0],
      lng: position[1],
    };

    localStorage.setItem("deviceLocation", JSON.stringify(data));
    alert("Guardado.");
  };

  // Búsqueda real
  const handleSearch = async () => {
    if (!search.trim()) {
      alert("Escriba algo.");
      return;
    }

    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        search
      )}`;

      const res = await fetch(url);
      const data = await res.json();

      if (data.length === 0) {
        alert("No encontrado.");
        return;
      }

      const place = data[0];
      const lat = parseFloat(place.lat);
      const lon = parseFloat(place.lon);

      // ACTUALIZA LAT/LNG
      setPosition([lat, lon]);

      // ACTIVA EL ZOOM
      setFlyTarget([lat, lon]);
    } catch (e) {
      console.error(e);
    }
  };

  const safePosition: [number, number] = position ?? [13.7, -89.21];

  return (
    <div className="map-page-container">
      <div className="map-card">
        {/* BUSCADOR */}
        <div className="map-search-container">
          <input
            className="map-search"
            placeholder="Buscar ubicación..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            <FiSearch size={18} />
          </button>
        </div>

        <MapContainer center={safePosition} zoom={13} className="map-box">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* ZOOM SOLO CUANDO BUSCAS */}
          {flyTarget && <FlyTo coords={flyTarget} />}

          <LocationMarker />
        </MapContainer>
      </div>

      {/* PANEL DERECHO */}
      <div className="map-info-card">
        <h3 className="info-title">Ubicación Seleccionada</h3>

        <label className="label-device">Nombre del dispositivo</label>
        <input
          className="input-name"
          placeholder="Ej: Sensor bosque norte"
          value={deviceName}
          onChange={(e) => setDeviceName(e.target.value)}
        />

        {position && (
          <div className="coords-box">
            <p>
              <strong>Latitud:</strong> {position[0]}
            </p>
            <p>
              <strong>Longitud:</strong> {position[1]}
            </p>
          </div>
        )}

        <button className="save-btn" onClick={saveLocation}>
          Guardar ubicación
        </button>
      </div>
    </div>
  );
}
