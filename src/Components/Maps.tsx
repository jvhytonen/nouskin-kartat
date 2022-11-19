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
  // For loading Google Maps. 
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_API_KEY!
  })

const initialState = {
  name: '',
  mapMaker: '', 
  scale: '', 
  description: '',
}

const reducer = (state:any, action:any) => {
  if (action.type === 'show-modal') {
    setShowModal(true)
    return {
      name: action.payload.name,
      mapMaker: action.payload.mapMaker,
      scale: action.payload.scale,
      description: action.payload.description,
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
      <div>
        {oMaps.map((item) => {
          return (
            <Polygon key={item.id} paths={item.coordinates} onClick={(event) => dispatch({type: 'show-modal', payload: item})} />
          )
        })}
      </div>
      <div>
        {sMaps.map((item) => {
          return (
            <Marker key={item.id} position={item.position} />
          )
        })}
      </div>
        {showModal ? 
        <div className='absolute top-20 left-20 h-3/5 w-3/5'>
          {/* The button to close the modal */}
          <div className='absolute top-2 right-2 h-8 w-5 text-xl text-center text-gray-200 cursor-pointer hover:bg-gray-200 hover:text-black' onClick={(event) => dispatch({type: 'close-modal'})}>X</div>
        <Modal name={state?.name} mapMaker={state?.mapMaker} scale={state?.scale} description={state?.description}/> </div> : null 
      }
      <></>
    </GoogleMap>
  ) : <h1>An error occurred</h1>
}

export default Maps