import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = () => {
  return (
    <MapContainer
      center={[-1.26286, 36.8044]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <Marker position={[-1.26286, 36.8044]} draggable={true} animate={true}>
        <Popup>cientific!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
