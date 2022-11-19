import { Data } from "@react-google-maps/api"
import { orienteeringMapType } from "../data/orienteering-maps"


interface ModalDataType {
    name?: string,
    mapMaker?: string,
    scale?: string,
    description?: string
}

const Modal = ({ name, mapMaker, scale, description }: ModalDataType) => {
    return (
        <div className='h-full w-full bg-white rounded-lg'>
            <div className='text-left text-2xl border-b dark:border-gray-600'>
                <h1>{name}</h1>
            </div>
            <div className='flex'>
                <h2>Kartoittaja: </h2>
                <h2>{mapMaker}</h2>
            </div>
            <div className='flex'>
                <h2>Mittakaava: </h2>
                <h3>{scale}</h3>
            </div>
            <h3>{description}</h3>
        </div>
    )
}

export default Modal