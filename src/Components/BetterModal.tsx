import { handleModalClosingType } from './Maps'
import CloseModal from './CloseModal'

interface ModalDataType {
    name?: string,
    mapMaker?: string,
    year?: string,
    scale?: string,
    description?: string,
    mapUrl: string
    close: handleModalClosingType
}

const BetterModal = ({ name, mapMaker, year, scale, description, mapUrl, close }: ModalDataType) => {
    return (

         <div className='modal-image text-black fixed top-40 left-7 xsm:absolute xsm:top-5 xsm:left-5 overflow-auto bg-slate-100 rounded-lg w-64 border-black border-2'>
            {/* <div className='absolute top-0 right-0'><CloseModal close={close} /></div> */}
            <div className='h-9 w-full border-b-2 border-gray-200 grid grid-cols-12 grid-rows-1 place-content-center'>
                <h1 className='col-start-2 h-full font-serif font-bold text-xl'>{name}</h1>
                 <CloseModal close={close} />
            </div>
            {mapMaker || scale || year ?
                <div className='h-52 w-full text-sm grid grid-cols-12 grid-rows-6 gap-1 border-b-2 my-1'>
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

export default BetterModal