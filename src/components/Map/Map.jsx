// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet' 

// const Map = ({pharmacies}) => {
//     return(
//       <MapContainer center={[pharmacies[0].Longitude, pharmacies[0].Latitude]} zoom={13} scrollWheelZoom={false} style={{ width: '300px', height: '200px' }}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {pharmacies.map((item) => {
//         <Marker position={[item.Longitude, item.Latitude]}>
//           <Popup>
//             {item.Title}
//           </Popup>
//         </Marker>
//         })}
//       </MapContainer>
//     )
// }

// export default Map;


import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


const Map = (props) => {
    return (
        <Container fluid="sm" className='my-3'>
            <Row>
                <MapContainer center={[props.pharmacies[0].Latitude, props.pharmacies[0].Longitude]} zoom={13} scrollWheelZoom={true} style={{ width: '100%', height: '80vh' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        props.pharmacies.map((item => {
                            return(
                                <Marker key={item._id} position={[item.Latitude, item.Longitude]}>
                                    <Popup>
                                        <p>
                                            <strong>Title:</strong> {item.Title}
                                        </p>
                                        <p>
                                            <strong>Address:</strong> {item.Address}
                                        </p>
                                    </Popup>
                                </Marker>
                            )
                        }))
                    }
                </MapContainer>
            </Row>
        </Container>
    )
}

export default Map;