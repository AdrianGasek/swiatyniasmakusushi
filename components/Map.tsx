import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { Icon, LatLngExpression } from "leaflet";
import Button from "./Button";
import { CSSProperties } from "react";
import 'leaflet/dist/leaflet.css';

const position = [52.2621746, 21.158529885038] as LatLngExpression;

interface MapProps {
    style?: CSSProperties;
  }

const Map = ({ style }: MapProps) => {
  const isMobile = window?.innerWidth < 1024;
  
  const markerIcon = new Icon({
    iconUrl: "/img/map-marker.svg",
    iconSize: isMobile ? [50, 50] : [60, 60],
    iconAnchor: [18, 58],
    popupAnchor: [0, 0],
  });

  const handleDirectionsClick = () => {
    const destination = `${position[0]},${position[1]}`;
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <>
      <MapContainer
        style={{ height: isMobile ? "300px" : "calc(100vh - 114px)", width: "100%", ...style }}
        center={position}
        zoom={isMobile ? 15 : 16}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          subdomains={"abcd"}
        />
        <Marker position={position} icon={markerIcon}>
        <Popup>
          <div className="text-center text-[18px]">
            <p>Ignacego Paderewskiego 28 <br /> 04-450 Warszawa</p>
            <Button onClick={handleDirectionsClick} text="Wyznacz trasę" className="text-[18px]"></Button>
          </div>
        </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
