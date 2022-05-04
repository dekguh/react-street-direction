import React, { useState, useEffect } from 'react'
import L from 'leaflet';
import { Marker, Popup, useMap } from 'react-leaflet';

const iconMotor = new L.Icon({
    iconUrl: './motorcyle-icon.png',
    iconRetinaUrl: './motorcyle-icon.png',
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 45),
});

const MyLocation = () => {
    const [position, setPosition] = useState(null);
    const [bbox, setBbox] = useState([]);

    const map = useMap();

    useEffect(() => {
      map.locate().on('locationfound', function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        setBbox(e.bounds.toBBoxString().split(","));
      });
    }, [map]);

    return position === null ? null : (
      <Marker position={position} icon={iconMotor}>
        <Popup>
        </Popup>
      </Marker>
    );
}

export default MyLocation