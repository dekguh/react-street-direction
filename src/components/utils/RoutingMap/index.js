import L from 'leaflet';
import 'leaflet-routing-machine';
import { createControlComponent } from '@react-leaflet/core';

/**
 * start point
 */
const startPoint = {
  lat: -8.792700,
  lng: 115.214985
};

/**
 * end point
 */
const endPoint = {
  lat: -8.828040,
  lng: 115.168251
};

const createRoutineMachineLayer = (props) => {
  const instance = L.Routing.control({
    waypoints: [L.latLng(startPoint), L.latLng(endPoint)],
    lineOptions: {
      styles: [{ color: "#0F6CFD", weight: 4 }]
    },
    show: true,
    collapsible: true,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
    language: "en",
    createMarker: () => false
  });

  return instance;
};

const RoutingMap = createControlComponent(createRoutineMachineLayer);

export default RoutingMap;
