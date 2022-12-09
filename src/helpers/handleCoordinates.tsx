//import {LatLng, LatLngLiteral} from '@types/googlemaps'
/**
 * Function fixing coordinates stored as strings to to be suitable for Google Maps API. Not very beautiful at the moment, but works. 
 * 
 */
 export interface mapDataType {
    id: number
    type: string
    name: string
    mapMaker: string
    scale: string
    description: string
    coordinates?: string[]
    polyCoords: PolyCoordsType[]
    markerCoords: google.maps.LatLngLiteral
  }
//   We need different types to Markers and Polygons. 
  export interface MarkerCoordinatesType extends mapDataType{
    coords: google.maps.LatLngLiteral
  }
  export interface PolyCoordinatesType extends mapDataType{
    coords: PolyCoordsType[]
  }
  export interface PolyCoordsType {
    lng: number
    lat: number
  }

  type handlePolyCoordinatesType = (strArray: string[]) => PolyCoordsType[]
  type handleMarkerCoordinatesType = (strArray: string[]) => google.maps.LatLngLiteral

/**
 * Returns objects divided with forest and school maps with correctly typed coordinates.
 *
 * @param {obj} mapDataObj Object containing all data from database. 
 * @return {obj} forestMaps: all data to be shown as orienteering maps schoolMaps: all data to be shown as school maps. 
 */
const handleMapData = (mapDataObj:mapDataType[]) => {
    let forestItems = []
    let schoolItems = []
    for (let i = 0; i < mapDataObj.length; i++) {
        let objItem = mapDataObj[i]
        if (objItem.type === 'forest' && objItem.coordinates) {
            objItem.polyCoords = handlePolyCoordinates(objItem.coordinates)
            delete objItem.coordinates
            forestItems.push(objItem)

        }
        else if (objItem.type === 'school' && objItem.coordinates) {
            objItem.markerCoords = handleMarkerCoordinates(objItem.coordinates)
            delete objItem.coordinates
            schoolItems.push(objItem)
        }
    }
    return {forestMaps: forestItems, schoolMaps: schoolItems}
}

/**
 * Returns coordinates so that React Google Maps Polygon-component accepts them.
 *
 * @param {arr} strArray Array of objects in string value containing lat and lng coordinates as "S: {61.8516996280382,23.048839800148457}" 
 * @return {arr} numberCoordinates: {lat: 61.8516996280382, lng:23.048839800148457 } 
 */
const handlePolyCoordinates:handlePolyCoordinatesType = (strArray) => {
    const numberCoordinates = []
    for (let i = 0; i < strArray.length; i++) {
        const coordString = Object.values(strArray[i])[0]
        const latlngs = coordString.split(',')
        const numberlat = Number(latlngs[0])
        const numberlng = Number(latlngs[1])
        const latlngObj = {
            lat: numberlat,
            lng: numberlng
        }
        numberCoordinates.push(latlngObj)
    }
    return numberCoordinates
}
/**
 * Returns coordinates so that React Google Maps Marker-component accepts them.
 *
 * @param {arr} strArray An array of a single object in string value containing lat and lng coordinates as "S: {61.8516996280382,23.048839800148457}" 
 * @return {arr} numberCoordinates: {lat: 61.8516996280382, lng:23.048839800148457 } 
 */
const handleMarkerCoordinates:handleMarkerCoordinatesType = (strArray) => {
    const coordString = Object.values(strArray[0])[0]
    const latlngs = coordString.split(',')
    const numberlat = Number(latlngs[0])
    const numberlng = Number(latlngs[1])
    const latlngObj = {
        lat: numberlat,
        lng: numberlng
    }
    return latlngObj
}
export default handleMapData