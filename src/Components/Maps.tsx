import { useReducer, useState } from 'react';
import { GoogleMap, useJsApiLoader, Polygon, Marker } from '@react-google-maps/api';
import { orienteeringMaps as oMaps } from '../data/orienteering-maps';
import { schoolMaps as sMaps } from '../data/school-maps';
import Modal from './Modal'

const containerStyle = {
  width: '800px',
  height: '800px'
};

const center = {
  lat: 61.763119,
  lng: 23.071493
};



const Maps = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showSchoolMaps, setShowSchoolMaps] = useState<boolean>(true)
  const [showOMaps, setShowOMaps] = useState<boolean>(true)

  // For loading Google Maps. 
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_API_KEY!
  })

  // Options for the Polygons
  const polyOptions = {
    fillColor: "#3d5caf",
    fillOpacity: 0.7,
    strokeColor: "#2b407a",
    strokeOpacity: 1,
    strokeWeight: 2,
  }

  const initialState = {
    name: '',
    mapMaker: '',
    year: '',
    scale: '',
    description: '',
    mapUrl: ''
  }

  const reducer = (state: any, action: any) => {
    if (action.type === 'show-modal') {
      setShowModal(true)
      return {
        name: action.payload.name,
        mapMaker: action.payload.mapMaker,
        year: action.payload.year,
        scale: action.payload.scale,
        description: action.payload.description,
        mapUrl: action.payload.mapUrl
      }
    }
    if (action.type === 'close-modal') {
      setShowModal(false)
      return initialState
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      <div className='h-1/6 w-1/5 absolute top-2 right-2 rounded-lg bg-red-700 p-3 bg-gray-200'>
        <div className='font-bold mb-4'>
          Näytä
        </div>
        <div>
          <input className='mr-1' type="checkbox" checked={showOMaps} name='o-maps' onChange={() => setShowOMaps(!showOMaps)}/>
          <label htmlFor='o-maps'>Suunnistuskartat</label>
        </div><div>
          <input className='mr-1' type="checkbox" checked={showSchoolMaps} name='school-maps' onChange={() => setShowSchoolMaps(!showSchoolMaps)}/>
          <label htmlFor='o-maps'>Koulukartat</label>
        </div>
      </div>
      {/* Orienteering maps are shown only in case the checkbox of Suunnistuskartat is checked */}
      {showOMaps ? 
      <div>
        {oMaps.map((item) => {
          return (
            <Polygon key={item.id} paths={item.coordinates} options={polyOptions} onClick={(event) => dispatch({ type: 'show-modal', payload: item })} />
          )
        })}
      </div> : null }
      {/* School maps are shown only in case the checkbox of Koulukartat is checked */}
      {showSchoolMaps ? 
      <div>
        {sMaps.map((item) => {
          return (
            <Marker key={item.id} position={item.position} onClick={(event) => dispatch({ type: 'show-modal', payload: item })}/>
          )
        })}
      </div> : null }
      {showModal ?
        <div className='absolute top-20 left-20 h-3/5 w-3/5'>
          {/* The button to close the modal */}
          <div className='absolute top-2 right-2 h-8 w-5 text-xl font-bold text-center text-gray-300 cursor-pointer hover:bg-gray-200 hover:text-black' onClick={(event) => dispatch({ type: 'close-modal' })}>X</div>
          <Modal name={state?.name} mapMaker={state?.mapMaker} year={state?.year} scale={state?.scale} description={state?.description} mapUrl={state?.mapUrl} /> </div> : null
      }
      <></>
    </GoogleMap>
  ) : <h1>An error occurred</h1>
}

export default Maps