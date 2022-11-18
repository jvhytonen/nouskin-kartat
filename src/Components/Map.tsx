import { GoogleMap, useJsApiLoader, Polygon } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '800px'
};

const center = {
  lat: 61.763119,
  lng: 23.071493
};

// Tevaniemen koordinaatit.
const paths = [
    { lat: 61.839594, lng: 23.074075 },
    { lat: 61.838541, lng: 23.120970 },
    { lat: 61.856278, lng: 23.116159 },
    { lat: 61.854902, lng: 23.050351 },
    { lat: 61.847046, lng: 23.049840 },
    { lat: 61.839594, lng: 23.074075 }
  ]

const NouskiMaps = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_API_KEY!
  })
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >

        <Polygon
      paths={paths}
    />
        <></>
      </GoogleMap>
  ) : <h1>An error occurred</h1>
}

export default NouskiMaps