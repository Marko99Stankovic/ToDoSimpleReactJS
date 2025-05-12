import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

// Fix za nedostatak ikonice
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
  iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
  shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
});

function Mapa() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{ height: '400px', width: '100%', maxWidth: '500px',marginTop: '30px', borderRadius: "30px", overflow: 'hidden'}}>
            <MapContainer center={[43.32472, 21.90333]} zoom={13} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> kontribuori'
                />
                <Marker position={[43.32472, 21.90333]}>
                  <Popup>
                    Niš – centar mape!
                  </Popup>
                </Marker>
            </MapContainer>
        </div>
    </div>
    
  );
}

export default Mapa;

