import { handleModalClosingType } from './Maps'
import CloseModal from './CloseModal'

/**
 * The modal that opens when the user clicks the polygon on Google Map. Alla the data is passed to this component from 
 * the reducer situated in Maps.tsx-component. 
 *   
 */

interface ModalDataType {
    name?: string,
    mapMaker?: string,
    year?: string,
    scale?: string,
    description?: string,
    mapUrl: string
    close: handleModalClosingType
}

const Modal = ({ name, mapMaker, year, scale, description, mapUrl, close }: ModalDataType) => {
    return (
         <div className='modal-image fixed top-0 left-0 w-full max-h-full xsm:absolute xsm:top-5 xsm:left-5 xsm:w-64 text-black rounded-lg border-black border-2'>
            <div className='h-auto my-3 w-full pl-[8%] border-b-2 border-gray-300'>
                <h1 className='m-y-auto w-3/4 text-left font-serif font-bold text-xl'>{name}</h1>
                 <CloseModal close={close} />
            </div>
            {mapMaker || scale || year ?
                <div className='h-52 w-full text-sm grid grid-cols-12 grid-rows-6 gap-1 border-b-2 border-gray-300 my-1'>
                    <div className='col-start-2 col-end-5 row-start-1 row-span-2 flex justify-start items-center font-bold'><p>Kartoittaja:</p></div>
                    <div className='col-start-6 col-span-7 row-span-2 flex justify-start items-center'><p>{mapMaker}</p></div>
                    <div className='col-start-2 col-end-5 row-start-3 row-span-2 flex justify-start items-center font-bold'><p>Vuosi:</p></div>
                    <div className='col-start-6 col-span-7 row-start-3 row-span-2 flex justify-start items-center'><p>{year}</p></div>
                    <div className='col-start-2 col-end-5 row-start-5 font-bold row-span-2 flex justify-start items-center'><p>Mittakaava:</p></div>
                    <div className='col-start-6 col-span-7 row-start-5 row-span-2 flex justify-start items-center'><p>{scale}</p></div>
                </div>
                : null}
            <div className='h-60 w-full pt-3'>
                <div className='h-full w-full text-sm grid grid-cols-12 grid-rows-2 gap-2'>
                    <div className='col-start-1 col-span-12 flex justify-center'>
                        <img src={mapUrl} alt={name} className='h-28 w-auto border-black border-2' />
                    </div>
                    <div className='col-start-2 col-end-12 row-start-2 flex items-center'>
                        <h3>{description}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal