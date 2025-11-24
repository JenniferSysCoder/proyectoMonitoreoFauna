// Este componente se encargará de renderizar la página de estado del dispositivo
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

const icon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [28, 28],
});

export function DevicesPage() {
  const saved = localStorage.getItem("deviceLocation");
  const position = saved ? JSON.parse(saved) : null;

  return (
    <div>
      <h2 style={{ color: "white", marginBottom: "10px" }}>
        Ubicación del dispositivo
      </h2>

      {position ? (
        <div
          style={{ height: "50vh", borderRadius: "12px", overflow: "hidden" }}
        >
          <MapContainer center={position} zoom={14} style={{ height: "100%" }}>
            <TileLayer
              attribution="© OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={icon} />
          </MapContainer>

          <p style={{ marginTop: 10, color: "white" }}>
            <strong>Lat:</strong> {position[0]}
            <br />
            <strong>Lng:</strong> {position[1]}
          </p>
        </div>
      ) : (
        <p style={{ color: "white" }}>
          No hay ubicación guardada. Selecciona una en la página MAP.
        </p>
      )}
    </div>
  );
}
