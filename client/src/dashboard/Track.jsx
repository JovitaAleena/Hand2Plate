import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

const Track = () => {
  const location = useLocation();
  const { hubCoordinates, destinationCoordinates } = location.state;

  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      const map = L.map(mapRef.current).setView(hubCoordinates, 13);
      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.Routing.control({
        waypoints: [L.latLng(hubCoordinates), L.latLng(destinationCoordinates)],
        routeWhileDragging: true,
        createMarker: function (i, waypoint, n) {
          const markerOptions = {
            draggable: true,
          };
          return L.marker(waypoint.latLng, markerOptions).bindPopup(i === 0 ? "Hub Location" : "Destination Location");
        },
        lineOptions: {
          styles: [{ color: 'blue', opacity: 0.6, weight: 4 }]
        }
      }).addTo(map);
    }
  }, [hubCoordinates, destinationCoordinates]);

  return (
    <div>
      <h1>Track Delivery</h1>
      <div ref={mapRef} id="map" style={{ height: "450px", width: "100%" }}></div>
    </div>
  );
};

export default Track;