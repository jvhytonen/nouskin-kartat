import { useReducer, useState } from 'react';
import { GoogleMap, useJsApiLoader, Polygon, Marker, Rectangle } from '@react-google-maps/api';
import {arrangedMapDataType } from '../App'
import { embargo } from '../data/embargo';
import Modal from './Modal'
import EmbargoModal from './EmbargoModal'
import FullMap from './FullMap'
import CheckboxArea from './CheckboxArea';

/**
 * Google Maps-component. Here are all states needed to run the map and the modals. 
 * 
 */

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 61.763119,
  lng: 23.071493
};

export type handleModalClosingType = () => void
export type handleFullMapType = () => void
export type handleMouseOverType = (e: google.maps.MapMouseEvent) => void | undefined
export type handleCheckboxesType = (type:string) => void

const Maps = (data: arrangedMapDataType) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showEmbargoModal, setShowEmbargoModal] = useState<boolean>(false)
  const [showSchoolMaps, setShowSchoolMaps] = useState<boolean>(true)
  const [showOMaps, setShowOMaps] = useState<boolean>(true)
  const [showFullMap, setShowFullMap] = useState<boolean>(false)
  const embargoStop = new Date('2025-09-22')
  const today = new Date()
  // For loading Google Maps. 
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    //The Usage of the api key is restricted to one single domain only. 
    googleMapsApiKey: 'API-KEY'
  })

  // Options for the Polygons
  const polyOptions = {
    fillColor: "#3d5caf",
    fillOpacity: 0.7,
    strokeColor: "#2b407a",
    strokeOpacity: 1,
    strokeWeight: 3,
    cursor: 'pointer',
  }
// Initial state for reducer that is used in modal.
  const initialState = {
    name: '',
    mapMaker: '',
    year: '',
    scale: '',
    description: '',
    smallMapUrl: '',
    fullMapUrl: ''
  }

  // Handling modal openings/closings and getting the right information into the modal 
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
        smallMapUrl: action.payload.smallMapUrl,
        fullMapUrl: action.payload.fullMapUrl
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
  const handleFullMapModal = () => {
    setShowFullMap(!showFullMap)
  }
  // Shows or hides different map types on the map. CheckboxArea is an own component.
  const handleCheckboxes: handleCheckboxesType = (type) => {
    if (type === 'oMaps') {
      setShowOMaps(!showOMaps)
    } else if (type === 'schoolMaps') {
      setShowSchoolMaps(!showSchoolMaps)
    }
  }
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      {/**Checkbox area for choosing orienteering maps or school maps. */}
   <CheckboxArea showOMaps={showOMaps} showSchoolMaps={showSchoolMaps} changeCheckboxValue={handleCheckboxes}/>
      {/* Orienteering maps are shown only in case the checkbox of Suunnistuskartat is checked */}
      {data.forestMaps && showOMaps ?
        <div>
          {data.forestMaps.map((item) => {
            return (
              <Polygon key={item.id} paths={item.polyCoords} options={polyOptions} onClick={(event) => dispatch({ type: 'show-modal', payload: item })} />
            )
          })}
        </div> : null}
      {/*Special embargo area in northeastern Ikaalinen. Embargo ends when the race is over. There is "a dead man's switch" to make sure the embargo is not shown after 
      the race is over, e.g. in case admin forgets to remove it or (s)he vanishes.*/ }
      {today < embargoStop ?
        <Rectangle bounds={embargo.bounds} options={embargo.options} onClick={(event => dispatch({ type: 'show-embargo', payload: embargo }))} />
        : null}

      {/* School maps are shown only in case the checkbox of Koulukartat is checked */}
      {data.schoolMaps && showSchoolMaps ?
        <div>
          {data.schoolMaps.map((item) => {
            return (
              <Marker key={item.id} position={item.markerCoords} icon={{
                url: './house.png' ,
                scaledSize: new window.google.maps.Size(40, 40)
              }} onClick={(event) => dispatch({ type: 'show-modal', payload: item })} />
            )
          })}
        </div> : null}

      {/*Modal area */}
      {showModal ? <Modal name={state?.name} mapMaker={state?.mapMaker} year={state?.year} scale={state?.scale} description={state?.description} smallMapUrl={state?.smallMapUrl} fullMapUrl={state?.fullMapUrl} close={handleModalClosing} showFullMap={handleFullMapModal}/> : null }
      {/*Modal showing embargo of SM-viesti 2025 */}
      {showEmbargoModal ? <EmbargoModal close={handleModalClosing} /> : null}
      {/*Modal showing full map */}
      {state?.fullMapUrl && showFullMap ? <FullMap fullMapUrl={state?.fullMapUrl} closeMap={handleFullMapModal} name={state?.name}/> : null}
      <></>
    </GoogleMap>
  ) : <h1>Loading map...</h1>
}
export default Maps