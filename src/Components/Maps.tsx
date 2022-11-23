import { useReducer, useState } from 'react';
import { GoogleMap, useJsApiLoader, Polygon, Marker, Rectangle } from '@react-google-maps/api';
import { orienteeringMaps as oMaps } from '../data/orienteering-maps';
import { schoolMaps as sMaps } from '../data/school-maps';
import { embargo } from '../data/embargo';
import BetterModal from './BetterModal'
import EmbargoModal from './EmbargoModal'


const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 61.763119,
  lng: 23.071493
};

export type handleModalClosingType = () => void
export type handleMouseOverType = (e: google.maps.MapMouseEvent) => void | undefined

const Maps = (data: any) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showEmbargoModal, setShowEmbargoModal] = useState<boolean>(false)
  const [showSchoolMaps, setShowSchoolMaps] = useState<boolean>(true)
  const [showOMaps, setShowOMaps] = useState<boolean>(true)
  const embargoStop = new Date('2025-09-22')
  const today = new Date()

  // For loading Google Maps. 
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: data.mapApiKey
  })

  // Options for the Polygons
  const polyOptions = {
    fillColor: "#3d5caf",
    fillOpacity: 0.7,
    strokeColor: "#2b407a",
    strokeOpacity: 1,
    strokeWeight: 2,
    cursor: 'pointer',
  }

  const initialState = {
    name: '',
    mapMaker: '',
    year: '',
    scale: '',
    description: '',
    mapUrl: ''
  }

  // The reducer for handling modal openings/closings and getting the right information into the modal 
  const reducer = (state: any, action: any) => {
    if (action.type === 'show-modal') {
      setShowModal(true)
      setShowEmbargoModal(false)
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
      setShowEmbargoModal(false)
      return initialState
    }
    if (action.type === 'show-embargo') {
      setShowEmbargoModal(true)
      return initialState
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleModalClosing: handleModalClosingType = () => {
    dispatch({ type: 'close-modal' })
  }


  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      {/**Checkbox area for choosing orienteering maps or school maps. */}
      <div className='absolute top-2 right-2 rounded-lg p-2 bg-gray-200'>
        <div className='font-bold mb-4'>
          Näytä
        </div>
        <div className='flex'>
          <input className='mr-1' type="checkbox" checked={showOMaps} name='o-maps' onChange={() => setShowOMaps(!showOMaps)} />
          <label htmlFor='o-maps'>Suunnistuskartat</label>
        </div><div className='flex'>
          <input className='mr-1' type="checkbox" checked={showSchoolMaps} name='school-maps' onChange={() => setShowSchoolMaps(!showSchoolMaps)} />
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
        </div> : null}

      {/*Special embargo area in northeastern Ikaalinen*/}
      {/*Embargo ends when the race is over. There is "a dead man's switch" to make sure the embargo is not shown after the race is over, e.g. in case admin forgets
        to remove it or (s)he vanishes.*/ }
      {today < embargoStop ?
        <Rectangle bounds={embargo.bounds} options={embargo.options} onClick={(event => dispatch({ type: 'show-embargo', payload: embargo }))} />
        : null}

      {/* School maps are shown only in case the checkbox of Koulukartat is checked */}
      {showSchoolMaps ?
        <div>
          {sMaps.map((item) => {
            return (
              <Marker key={item.id} position={item.position} onClick={(event) => dispatch({ type: 'show-modal', payload: item })} />
            )
          })}
        </div> : null}

      {/*Modal area */}
      {showModal ? <BetterModal name={state?.name} mapMaker={state?.mapMaker} year={state?.year} scale={state?.scale} description={state?.description} mapUrl={state?.mapUrl} close={handleModalClosing} /> : null }
      
      {showEmbargoModal ? <EmbargoModal close={handleModalClosing} /> : null}
      <></>
    </GoogleMap>
  ) : <h1>An error occurred</h1>
}

export default Maps