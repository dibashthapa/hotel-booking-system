import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

interface MapProps {
  children?: React.ReactChildren;
}
export const Map: React.FC<MapProps> = ({ children }) => {
  return (
    <MapContainer
      center={[27.7475809, 85.3052357]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "400px" }}
    >
      <TileLayer
        attribution=' &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmV1c2x5IiwiYSI6ImNrcjducHI3YTNueWwydXFodWV6OXZlY3oifQ.tvR8zkkC6ClxjdWfyH4TRQ"
        maxZoom={20}
      />
      {children}
    </MapContainer>
  );
};
