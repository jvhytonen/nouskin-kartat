/**
 * Function fixing coordinates stored as strings to to be suitable for Google Maps API. 
 * 
 */

import { isTemplateExpression } from "typescript"


 export interface mapDataType {
    id: number
    type: string
    name: string
    mapMaker: string
    scale: string
    description: string
    coordinates: string[]
    coords?: coordiNatesType[]
  }

  export interface coordiNatesType {
    lng: number
    lat: number
  }

const handleMapData = (mapDataObj:mapDataType[]) => {
    let forestItems = []
    let schoolItems = []
    for (let i = 0; i < mapDataObj.length; i++) {
        let dataItem = mapDataObj[i]
        console.log(dataItem)
        if (dataItem.type === 'forest') {
            console.log('yes')
            forestItems.push(dataItem)
        }
        else if (dataItem.type === 'school') {
            schoolItems.push(dataItem)
        }
        dataItem.coords = handleCoordinates(dataItem.coordinates)
    }
    return {forestMaps: forestItems, schoolMaps: schoolItems}
}


const handleCoordinates = (strArray: string[]) => {
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

export default handleMapData