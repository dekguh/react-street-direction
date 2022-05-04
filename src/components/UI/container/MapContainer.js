import React from 'react';
import { MapContainer as Container, TileLayer } from 'react-leaflet';
import MyLocation from '../../utils/MyLocation';
import RoutingMap from '../../utils/RoutingMap';

const center = { lat: -8.793271, lng: 115.215430 };

export const MapContainer = (props) => {
  const whenClicked = (e) => {
    console.log(e);
  };

  return (
    <Container
      style={{ height: '100%', width: '100%', zIndex: 10 }}
      center={center}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <RoutingMap />
      <MyLocation />
    </Container>
  );
};
